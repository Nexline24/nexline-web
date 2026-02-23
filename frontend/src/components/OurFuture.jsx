import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';

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
      { threshold: 0.1 }
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const valuePoints = [
    'Workflow optimization',
    'Predictive performance insight',
    'Smart resource allocation',
    'Automated decision layers',
    'Data-to-strategy transformation'
  ];

  const performanceSteps = [
    'Data',
    'Insight',
    'Action',
    'Optimization',
    { text: 'Cost Reduction', bold: true },
    { text: 'Continuous Improvement', bold: true }
  ];

  return (
    <section 
      ref={sectionRef}
      id="our-future" 
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Block 1: Hero Text */}
      <div className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[14px] font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-8">
            OUR FUTURE
          </p>
          <h2 className="text-[52px] md:text-[64px] font-semibold text-[#0A2540] leading-[1.1] tracking-tight mb-6">
            Engineering Intelligence for the Next Industrial Era
          </h2>
          <p className="text-[20px] text-gray-600 leading-[1.5] max-w-3xl mx-auto">
            Intelligence that Reduces Cost. Enhances Performance. Drives Precision.
          </p>
        </div>
      </div>

      {/* Block 2: AI Visual - 4 Images */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop" 
              alt="AI Technology 1"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop" 
              alt="AI Technology 2"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" 
              alt="AI Technology 3"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop" 
              alt="AI Technology 4"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Block 3: 2-Column Content */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Column 1 - Applied AI */}
            <div>
              <h3 className="text-[22px] font-semibold text-[#0A2540] mb-6 tracking-tight">
                Applied AI
              </h3>
              <p className="text-body-premium text-gray-700 mb-6">
                We integrate Artificial Intelligence to optimize workflows, automate intelligent decisions, and reduce structural cost exposure.
              </p>
              <p className="text-body-premium text-gray-700 mb-8">
                Our team brings years of industry experience, enabling us to identify where AI delivers measurable impact.
              </p>
              <div className="inline-block px-6 py-3 bg-gray-50 border-l-4 border-[#D4AF37]">
                <p className="text-[15px] font-semibold text-[#0A2540] tracking-wide">
                  Industry-backed. Data-driven. Results-focused.
                </p>
              </div>
            </div>

            {/* Column 2 - Intelligence Creates Value */}
            <div>
              <h3 className="text-[22px] font-semibold text-[#0A2540] mb-6 tracking-tight">
                Intelligence Creates Value
              </h3>
              <ul className="space-y-4">
                {valuePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-body-premium text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Block 4: Performance Loop */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {performanceSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <span className={`text-[16px] ${
                    typeof step === 'object' && step.bold 
                      ? 'font-bold text-[#0A2540]' 
                      : 'font-medium text-gray-700'
                  } tracking-wide`}>
                    {typeof step === 'object' ? step.text : step}
                  </span>
                </div>
                {index < performanceSteps.length - 1 && (
                  <span className="text-[#D4AF37] font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Block 5: Dark CTA Section */}
      <div className="py-24 bg-[#0E1A2B]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-[42px] md:text-[48px] font-semibold text-white leading-[1.2] mb-10 tracking-tight">
            Build Smarter Systems.<br />
            Operate Leaner Structures.<br />
            Move Faster.
          </h3>
          <Button 
            onClick={scrollToContact}
            className="bg-white text-[#0E1A2B] hover:bg-gray-100 hover-scale transition-all duration-200 text-[15px] px-8 py-6 font-semibold tracking-[0.4px] rounded-md shadow-lg"
          >
            Request AI Strategy Discussion
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurFuture;
