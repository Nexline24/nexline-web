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
      <div className="absolute inset-0 bg-[#0A2540] opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Global Industrial Supply.<br />
          Reliable. Efficient. Trusted.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto">
          Electrical Distribution • Automation Systems • Mechanical Equipment
        </p>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto">
          Power Solutions • Enterprise Hardware
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-[#0A2540] hover:bg-gray-100 transition-colors duration-200 text-lg px-8 py-6"
          >
            Request a Quotation
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#0A2540] transition-colors duration-200 text-lg px-8 py-6"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
