import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Brands', id: 'brands' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100" role="banner">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/logo.jpeg" 
              alt="Nexline General Trading - Home" 
              className="h-11 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#0A2540] hover:text-[#D4AF37] transition-colors duration-200 font-medium text-[14px] whitespace-nowrap py-2"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#0A2540] text-white hover:bg-[#0d2f4d] transition-colors duration-200 font-semibold px-5 text-[14px] min-h-[40px]"
              data-testid="header-cta"
            >
              Request a Quotation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0A2540] p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-6 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-[#0A2540] hover:text-[#D4AF37] transition-colors duration-200 font-medium py-3 text-[15px] min-h-[44px]"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#0A2540] text-white hover:bg-[#0d2f4d] transition-colors duration-200 font-semibold mt-3 min-h-[48px]"
            >
              Request a Quotation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
