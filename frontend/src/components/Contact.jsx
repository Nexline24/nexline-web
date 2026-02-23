import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { MapPin, Mail, Phone } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast.success('Thank you! Your quotation request has been received. We will contact you shortly.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      productCategory: '',
      destinationCountry: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] text-center mb-16">
          Request a Quotation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#0A2540] mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#0A2540] mb-1">Address</p>
                  <p className="text-gray-700">
                    10005 Compass Building<br />
                    Ras Al Khaimah<br />
                    United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#0A2540] mb-1">Email</p>
                  <a 
                    href="mailto:shahid@nexlinetrading.com" 
                    className="text-gray-700 hover:text-[#D4AF37] transition-colors"
                  >
                    shahid@nexlinetrading.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#0A2540] mb-1">Phone</p>
                  <a 
                    href="tel:+971564230120" 
                    className="text-gray-700 hover:text-[#D4AF37] transition-colors"
                  >
                    +971 56 423 0120
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="productCategory">Product Category *</Label>
                <Select 
                  value={formData.productCategory} 
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger className="mt-2">
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
                <Label htmlFor="destinationCountry">Destination Country *</Label>
                <Input
                  id="destinationCountry"
                  name="destinationCountry"
                  type="text"
                  placeholder="Enter country of delivery"
                  value={formData.destinationCountry}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please provide part numbers, quantities, technical specifications, and any additional requirements."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#0A2540] text-white hover:bg-[#0d2f4d] transition-colors duration-200 py-6 text-lg"
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
