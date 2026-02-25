import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-18"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1764499058985-4d017f365a13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwc3VwcGx5JTIwY2hhaW58ZW58MHx8fHwxNzcxODEyMjkzfDA&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      aria-label="Hero section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A2540] opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center py-20">
        <h1 className="text-[38px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-semibold text-white mb-8 leading-[1.1] tracking-tight">
          Global Industrial Supply.<br />
          Reliable. Efficient. Trusted.
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-2 mb-12">
          <p className="text-[16px] md:text-[18px] text-gray-200 font-medium tracking-wide">
            Electrical Distribution • Automation Systems • Mechanical Equipment
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-200 font-medium tracking-wide">
            Power Solutions • Enterprise Hardware
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-white text-[#0A2540] hover:bg-gray-100 transition-all duration-200 text-[15px] px-8 py-3 font-semibold rounded-md min-w-[200px]"
            data-testid="hero-cta-quotation"
          >
            Request a Quotation
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#0A2540] transition-all duration-200 text-[15px] px-8 py-3 font-semibold rounded-md min-w-[200px]"
            data-testid="hero-cta-contact"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
