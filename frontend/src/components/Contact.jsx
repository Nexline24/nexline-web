import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { MapPin, Mail, Phone } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    destinationCountry: '',
    message: ''
  });

  const productCategories = [
    'Electrical Distribution Boards',
    'Industrial Automation & PLC Systems',
    'Power Generation & Transmission Equipment',
    'Mechanical Equipment & Industrial Spare Parts',
    'Inspection & Testing Devices',
    'Industrial & Enterprise Hardware Components',
    'Multiple Categories',
    'Not Sure / General Inquiry'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      productCategory: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if product category is selected
    if (!formData.productCategory) {
      toast.error('Please select a product category');
      return;
    }
    
    try {
      // Show loading toast
      const loadingToast = toast.loading('Submitting your request...');
      
      // Prepare data for backend
      const requestData = {
        full_name: formData.name,
        company_name: formData.company,
        email: formData.email,
        phone: formData.phone,
        product_category: formData.productCategory,
        destination_country: formData.destinationCountry,
        message: formData.message
      };
      
      // Send to backend
      const response = await axios.post(`${API}/quotation/submit`, requestData);
      
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      // Show success message
      toast.success('Thank you! Your quotation request has been received. We will contact you shortly.');
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productCategory: '',
        destinationCountry: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit your request. Please try again or contact us directly.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F9FAFB]" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 id="contact-heading" className="text-[32px] md:text-[36px] font-semibold text-[#0A2540] text-center mb-12 tracking-tight leading-[1.2]">
          Request a Quotation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#0A2540] mb-7">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#0A2540] mb-1 text-[15px]">Address</p>
                  <address className="text-[15px] text-gray-600 leading-relaxed not-italic">
                    10005 Compass Building<br />
                    Ras Al Khaimah<br />
                    United Arab Emirates
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#0A2540] mb-1 text-[15px]">Email</p>
                  <a 
                    href="mailto:shahid@nexlinetrading.com" 
                    className="text-[15px] text-gray-600 hover:text-[#D4AF37] transition-colors"
                  >
                    shahid@nexlinetrading.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" strokeWidth={2} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[#0A2540] mb-1 text-[15px]">Phone</p>
                  <a 
                    href="tel:+971564230120" 
                    className="text-[15px] text-gray-600 hover:text-[#D4AF37] transition-colors"
                  >
                    +971 56 423 0120
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-[14px] font-medium text-gray-700">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-[14px] font-medium text-gray-700">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[14px] font-medium text-gray-700">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-[14px] font-medium text-gray-700">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="productCategory" className="text-[14px] font-medium text-gray-700">Product Category *</Label>
                <Select 
                  value={formData.productCategory} 
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select a product category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((category, index) => (
                      <SelectItem key={index} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="destinationCountry" className="text-[14px] font-medium text-gray-700">Destination Country *</Label>
                <Input
                  id="destinationCountry"
                  name="destinationCountry"
                  type="text"
                  placeholder="Enter country of delivery"
                  value={formData.destinationCountry}
                  onChange={handleChange}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-[14px] font-medium text-gray-700">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please provide part numbers, quantities, technical specifications, and any additional requirements."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1.5"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-[#0A2540] text-white hover:bg-[#0d2f4d] transition-all duration-200 py-3 text-[15px] font-semibold tracking-[0.3px] rounded-md mt-2"
              >
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
