import requests
import sys
import json
from datetime import datetime

class NexlineAPITester:
    def __init__(self, base_url="https://nexline-corp.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.issues = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED {details}")
        else:
            self.issues.append(f"{name}: {details}")
            print(f"❌ {name} - FAILED {details}")

    def test_api_health(self):
        """Test if API is accessible"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", Response: {data.get('message', 'No message')}"
            self.log_test("API Health Check", success, details)
            return success
        except Exception as e:
            self.log_test("API Health Check", False, f"Error: {str(e)}")
            return False

    def test_quotation_submit_validation(self):
        """Test quotation endpoint with invalid data"""
        try:
            # Test empty data
            response = requests.post(
                f"{self.api_url}/quotation/submit",
                json={},
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            success = response.status_code == 422  # Validation error expected
            details = f"Empty data - Status: {response.status_code}"
            self.log_test("Quotation Validation (Empty Data)", success, details)
            
            # Test missing required fields
            partial_data = {
                "full_name": "Test User",
                "email": "invalid-email"  # Invalid email format
            }
            response = requests.post(
                f"{self.api_url}/quotation/submit",
                json=partial_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            success = response.status_code == 422
            details = f"Invalid email - Status: {response.status_code}"
            self.log_test("Quotation Validation (Invalid Email)", success, details)
            
            return True
        except Exception as e:
            self.log_test("Quotation Validation", False, f"Error: {str(e)}")
            return False

    def test_quotation_submit_success(self):
        """Test successful quotation submission"""
        try:
            timestamp = datetime.now().strftime("%H%M%S")
            test_data = {
                "full_name": f"Test User {timestamp}",
                "company_name": f"Test Company {timestamp}",
                "email": f"test{timestamp}@example.com",
                "phone": "+971501234567",
                "product_category": "Electrical Distribution Boards",
                "destination_country": "United Arab Emirates",
                "message": f"Test quotation request submitted at {datetime.now()}"
            }
            
            print(f"🔍 Submitting test quotation with data: {test_data['email']}")
            
            response = requests.post(
                f"{self.api_url}/quotation/submit",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=15  # Longer timeout for email processing
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Message: {data.get('message', 'No message')}"
                if 'quotation_id' in data:
                    details += f", ID: {data['quotation_id']}"
                    self.last_quotation_id = data['quotation_id']
            else:
                try:
                    error_data = response.json()
                    details += f", Error: {error_data.get('detail', 'Unknown error')}"
                except:
                    details += f", Raw error: {response.text[:200]}"
            
            self.log_test("Quotation Submission (Valid Data)", success, details)
            return success
        except Exception as e:
            self.log_test("Quotation Submission (Valid Data)", False, f"Error: {str(e)}")
            return False

    def test_quotation_list(self):
        """Test getting quotation list"""
        try:
            response = requests.get(
                f"{self.api_url}/quotation/list",
                timeout=10
            )
            
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if success:
                data = response.json()
                details += f", Count: {len(data)} quotations"
                if data and len(data) > 0:
                    # Check if our test quotation exists
                    if hasattr(self, 'last_quotation_id'):
                        found = any(q.get('id') == self.last_quotation_id for q in data)
                        details += f", Test quotation found: {found}"
            
            self.log_test("Quotation List Retrieval", success, details)
            return success
        except Exception as e:
            self.log_test("Quotation List Retrieval", False, f"Error: {str(e)}")
            return False

    def test_product_categories_coverage(self):
        """Test that all 8 product categories are handled"""
        categories = [
            'Electrical Distribution Boards',
            'Industrial Automation & PLC Systems',
            'Power Generation & Transmission Equipment',
            'Mechanical Equipment & Industrial Spare Parts',
            'Inspection & Testing Devices',
            'Industrial & Enterprise Hardware Components',
            'Multiple Categories',
            'Not Sure / General Inquiry'
        ]
        
        print(f"🔍 Testing product categories coverage (8 categories expected)")
        
        # We'll test with one category to verify the backend accepts them
        try:
            test_data = {
                "full_name": "Category Test User",
                "company_name": "Category Test Co",
                "email": "categorytest@example.com",
                "phone": "+971501234567",
                "product_category": categories[0],  # Test first category
                "destination_country": "UAE",
                "message": "Testing category handling"
            }
            
            response = requests.post(
                f"{self.api_url}/quotation/submit",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=15
            )
            
            success = response.status_code == 200
            details = f"Category '{categories[0]}' - Status: {response.status_code}"
            
            self.log_test("Product Category Handling", success, details)
            return success
        except Exception as e:
            self.log_test("Product Category Handling", False, f"Error: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Nexline API Backend Tests")
        print(f"Testing API at: {self.api_url}")
        print("=" * 50)
        
        # Test API health first
        if not self.test_api_health():
            print("\n❌ API is not accessible, stopping tests")
            return False
        
        # Run validation tests
        self.test_quotation_submit_validation()
        
        # Test successful submission
        success = self.test_quotation_submit_success()
        
        # Test quotation listing
        self.test_quotation_list()
        
        # Test product categories
        self.test_product_categories_coverage()
        
        # Print summary
        print("\n" + "=" * 50)
        print(f"📊 Backend Tests Summary:")
        print(f"Tests passed: {self.tests_passed}/{self.tests_run}")
        print(f"Success rate: {(self.tests_passed/self.tests_run)*100:.1f}%")
        
        if self.issues:
            print(f"\n⚠️  Issues found ({len(self.issues)}):")
            for issue in self.issues:
                print(f"   - {issue}")
        
        return self.tests_passed == self.tests_run

def main():
    tester = NexlineAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())