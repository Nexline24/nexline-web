import os
import resend
from dotenv import load_dotenv
from pathlib import Path
from email_templates import get_admin_notification_email

# Load environment
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure Resend
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'no-reply@nexlinetrading.com')
ADMIN_EMAIL = 'shahid@nexlinetrading.com'

# Test data
form_data = {
    'full_name': 'DIRECT TEST - Shahid',
    'company_name': 'Email Verification Test',
    'email': 'test@example.com',
    'phone': '+971 56 423 0120',
    'product_category': 'Testing Email Delivery',
    'destination_country': 'UAE',
    'message': 'This is a DIRECT test email sent from test_email_direct.py script. If you receive this email at shahid@nexlinetrading.com, the email system is working correctly.'
}

# Generate email
email_data = get_admin_notification_email(form_data)

# Send email
print(f"Sending test email to: {ADMIN_EMAIL}")
print(f"From: {SENDER_EMAIL}")
print(f"Subject: {email_data['subject']}")

try:
    result = resend.Emails.send({
        "from": SENDER_EMAIL,
        "to": [ADMIN_EMAIL],
        "subject": email_data["subject"],
        "html": email_data["html"]
    })
    print(f"\n✅ SUCCESS! Email sent successfully!")
    print(f"Email ID: {result['id']}")
    print(f"\nPlease check your inbox at: {ADMIN_EMAIL}")
    print(f"Also check spam/junk folder if not in inbox")
    print(f"\nYou can verify delivery status at: https://resend.com/emails/{result['id']}")
except Exception as e:
    print(f"\n❌ ERROR: {str(e)}")
