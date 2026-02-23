import requests
import time

# Test email functionality specifically
def test_email_debug():
    api_url = "https://nexline-future.preview.emergentagent.com/api"
    
    test_data = {
        "full_name": "Email Test User",
        "company_name": "Email Test Company",
        "email": "test.email.debug@example.com",
        "phone": "+971501234567",
        "product_category": "Electrical Distribution Boards",
        "destination_country": "United Arab Emirates",
        "message": "Testing email functionality - please check logs for email errors"
    }
    
    print("🔍 Testing email functionality...")
    print(f"Submitting test with email: {test_data['email']}")
    
    response = requests.post(
        f"{api_url}/quotation/submit",
        json=test_data,
        headers={'Content-Type': 'application/json'},
        timeout=20
    )
    
    print(f"Response status: {response.status_code}")
    if response.status_code == 200:
        data = response.json()
        print(f"Response: {data}")
        print("✅ Quotation submitted successfully")
        print("Waiting 3 seconds for email processing...")
        time.sleep(3)
        print("Check backend logs for email details")
    else:
        print(f"❌ Failed with status {response.status_code}")
        try:
            error_data = response.json()
            print(f"Error details: {error_data}")
        except:
            print(f"Raw response: {response.text}")

if __name__ == "__main__":
    test_email_debug()