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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img 
            src="/logo.jpeg" 
            alt="Nexline General Trading" 
            className="h-16 w-auto"
          />

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Terms & Conditions
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-300">
            <p>&copy; 2026 Nexline General Trading FZ LLC</p>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer - Small Fine Print */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            All brand names and trademarks are the property of their respective owners. 
            Nexline General Trading FZ LLC is an independent supplier and is not an authorized distributor unless otherwise stated.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
