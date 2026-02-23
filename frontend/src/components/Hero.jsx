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
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1764499058985-4d017f365a13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwc3VwcGx5JTIwY2hhaW58ZW58MHx8fHwxNzcxODEyMjkzfDA&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A2540] opacity-92"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center py-20">
        <h1 className="text-hero text-white mb-8 max-w-[900px] mx-auto">
          Global Industrial Supply.<br />
          Reliable. Efficient. Trusted.
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-2 mb-12">
          <p className="text-tagline text-gray-100">
            Electrical Distribution • Automation Systems • Mechanical Equipment
          </p>
          <p className="text-tagline text-gray-100">
            Power Solutions • Enterprise Hardware
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-12">
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-white text-[#0A2540] hover:bg-gray-50 hover-scale transition-all duration-200 text-[15px] px-7 py-[14px] font-semibold shadow-lg tracking-[0.4px] rounded-md"
          >
            Request a Quotation
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#0A2540] hover-scale transition-all duration-200 text-[15px] px-7 py-[14px] font-semibold tracking-[0.4px] rounded-md"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
