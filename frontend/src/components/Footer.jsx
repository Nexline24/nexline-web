import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <img 
            src="/logo.jpeg" 
            alt="Nexline General Trading" 
            className="h-20 w-auto object-contain"
          />

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-[16px] font-medium">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Privacy Policy
            </button>
            <span className="text-gray-500">|</span>
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              Terms & Conditions
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-300 font-medium text-[16px]">
            <p>&copy; 2026 Nexline General Trading FZ LLC</p>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer - Small Fine Print */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <p className="text-xs text-gray-400 text-center leading-[1.7] max-w-4xl mx-auto">
            All brand names and trademarks are the property of their respective owners. 
            Nexline General Trading FZ LLC is an independent supplier and is not an authorized distributor unless otherwise stated.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
