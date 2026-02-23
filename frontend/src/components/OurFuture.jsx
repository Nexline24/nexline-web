import React, { useEffect, useRef, useState } from 'react';

const OurFuture = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Top Divider */}
      <div className="w-full border-t border-gray-200"></div>
      
      <section 
        ref={sectionRef}
        id="our-future" 
        className="bg-white py-32 md:py-40"
      >
        <div 
          className={`max-w-5xl mx-auto px-6 lg:px-8 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Label */}
          <p className="text-[14px] font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-12">
            OUR FUTURE
          </p>

          {/* Hero Statement - Bold & Dominant */}
          <h2 className="text-[48px] md:text-[62px] lg:text-[72px] font-semibold text-[#0A2540] leading-[1.1] tracking-tight mb-16">
            AI Is Not an Addition.<br />
            It Is Our Direction.
          </h2>

          {/* Body Copy - Executive Language */}
          <p className="text-[18px] md:text-[20px] text-gray-700 leading-[1.7] max-w-3xl mx-auto">
            We integrate AI directly into operational ecosystems.<br />
            Improving functionality. Increasing efficiency. Reducing cost.
          </p>
        </div>
      </section>

      {/* Bottom Divider */}
      <div className="w-full border-t border-gray-200"></div>
    </>
  );
};

export default OurFuture;
