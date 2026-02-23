from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
from email_templates import get_admin_notification_email, get_client_confirmation_email


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend API configuration
RESEND_API_KEY = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
ADMIN_EMAIL = 'shahid@nexlinetrading.com'

# Initialize Resend
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class QuotationRequest(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    company_name: str
    email: EmailStr
    phone: str
    product_category: str
    destination_country: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    
class QuotationRequestCreate(BaseModel):
    full_name: str
    company_name: str
    email: EmailStr
    phone: str
    product_category: str
    destination_country: str
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/quotation/submit")
async def submit_quotation(request: QuotationRequestCreate):
    """Handle quotation form submission with email notifications"""
    try:
        # Create quotation object
        quotation_dict = request.model_dump()
        quotation_obj = QuotationRequest(**quotation_dict)
        
        # Save to database
        doc = quotation_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        await db.quotation_requests.insert_one(doc)
        logger.info(f"Quotation request saved: {quotation_obj.id}")
        
        # Prepare form data for email templates
        form_data = {
            'full_name': request.full_name,
            'company_name': request.company_name,
            'email': request.email,
            'phone': request.phone,
            'product_category': request.product_category,
            'destination_country': request.destination_country,
            'message': request.message
        }
        
        # Send emails asynchronously
        if RESEND_API_KEY:
            # Send admin notification email
            admin_email_data = get_admin_notification_email(form_data)
            admin_params = {
                "from": SENDER_EMAIL,
                "to": [ADMIN_EMAIL],
                "subject": admin_email_data["subject"],
                "html": admin_email_data["html"]
            }
            
            # Send client confirmation email
            client_email_data = get_client_confirmation_email(form_data)
            client_params = {
                "from": SENDER_EMAIL,
                "to": [request.email],
                "subject": client_email_data["subject"],
                "html": client_email_data["html"]
            }
            
            # Send both emails in parallel using asyncio
            try:
                admin_result, client_result = await asyncio.gather(
                    asyncio.to_thread(resend.Emails.send, admin_params),
                    asyncio.to_thread(resend.Emails.send, client_params),
                    return_exceptions=True
                )
                
                if isinstance(admin_result, Exception):
                    logger.error(f"Admin email failed: {str(admin_result)}")
                else:
                    logger.info(f"Admin email sent successfully: {admin_result}")
                    
                if isinstance(client_result, Exception):
                    logger.error(f"Client email failed: {str(client_result)}")
                else:
                    logger.info(f"Client email sent successfully: {client_result}")
                
            except Exception as email_error:
                logger.error(f"Error sending emails: {str(email_error)}")
                # Continue even if email fails - quotation is saved
        
        return {
            "status": "success",
            "message": "Your quotation request has been received. We will contact you shortly.",
            "quotation_id": quotation_obj.id
        }
        
    except Exception as e:
        logger.error(f"Error processing quotation request: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to process request: {str(e)}")

@api_router.get("/quotation/list", response_model=List[QuotationRequest])
async def get_quotations():
    """Get all quotation requests"""
    quotations = await db.quotation_requests.find({}, {"_id": 0}).sort("timestamp", -1).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for quotation in quotations:
        if isinstance(quotation['timestamp'], str):
            quotation['timestamp'] = datetime.fromisoformat(quotation['timestamp'])
    
    return quotations

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()