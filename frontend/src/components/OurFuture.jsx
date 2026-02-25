import React, { useEffect, useRef, useState } from 'react';

const OurFuture = () => {
  const [visibleBlocks, setVisibleBlocks] = useState({});
  const blockRefs = useRef([]);
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const closingRef = useRef(null);
  const [closingVisible, setClosingVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          if (index !== undefined) {
            setVisibleBlocks(prev => ({ ...prev, [index]: true }));
          }
        }
      });
    }, observerOptions);

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      });
    }, { threshold: 0.2 });

    const closingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setClosingVisible(true);
        }
      });
    }, { threshold: 0.2 });

    blockRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (closingRef.current) closingObserver.observe(closingRef.current);

    return () => {
      observer.disconnect();
      headerObserver.disconnect();
      closingObserver.disconnect();
    };
  }, []);

  const specializations = [
    {
      title: 'AI Voice & Customer Support Automation',
      description: 'We will deploy conversational AI voice solutions—including intelligent voice automation similar to those used by leading institutions such as Emirates NBD—to modernize how businesses handle inbound customer interactions.',
      deliverables: [
        'AI-powered call handling and smart routing',
        'Conversational IVR (voice recognition)',
        '24/7 automated customer support',
        'CRM and backend system integration'
      ],
      outcome: 'Reduced staffing cost. Faster response times. Scalable support infrastructure.',
      image: 'https://static.prod-images.emergentagent.com/jobs/0e9b3327-9faa-4aa5-804a-120d0d8ad0ae/images/e56151a9d2c71c9085a20db2e896cc2876cee72253d75ee6300d557b479f18c9.png',
      imageAlt: 'AI Voice Support illustration'
    },
    {
      title: 'Process Automation & Workflow Optimization',
      description: 'We will redesign internal workflows using AI-driven automation to reduce manual effort, eliminate bottlenecks, and improve accuracy across business processes.',
      deliverables: [
        'Document automation (RFQs, invoices, contracts)',
        'AI-assisted communication workflows',
        'Intelligent data extraction and structuring',
        'Seamless system integration'
      ],
      outcome: 'Lower administrative overhead. Higher operational speed. Improved consistency.',
      image: 'https://static.prod-images.emergentagent.com/jobs/0e9b3327-9faa-4aa5-804a-120d0d8ad0ae/images/1a612acf27c27074e1d96113bea7579c9b390e8c3282f756927b60419b8be29c.png',
      imageAlt: 'Process Automation illustration'
    },
    {
      title: 'Data Analytics & Predictive Intelligence',
      description: 'We will convert operational data into actionable intelligence through advanced analytics and machine learning—enabling better decisions, stronger planning, and improved cost control.',
      deliverables: [
        'Cost optimization models',
        'Demand forecasting and planning insights',
        'Supplier performance analysis',
        'Profitability and margin intelligence'
      ],
      outcome: 'Smarter decisions. Reduced risk. Sustainable cost efficiency.',
      image: 'https://static.prod-images.emergentagent.com/jobs/0e9b3327-9faa-4aa5-804a-120d0d8ad0ae/images/92402578ac840a927e9f139b5acf8a05bfd98431465a82bfb972c84029e35b67.png',
      imageAlt: 'Data Analytics illustration'
    }
  ];

  return (
    <section id="our-future" className="bg-white py-24" data-testid="our-future-section">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Centered Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#0A2540] mb-4 tracking-tight leading-[1.1]">
            OUR FUTURE
          </h2>
          <p className="text-[24px] md:text-[28px] font-medium text-gray-600 leading-[1.4] mb-5 mx-auto">
            Intelligent Systems. Measurable Efficiency.
          </p>
          <p className="text-[15px] text-gray-500 leading-[1.7] max-w-2xl mx-auto">
            We will help organizations integrate practical AI solutions that will streamline operations, enhance customer experience, and reduce operational costs.
          </p>
        </div>

        {/* Specialization Cards */}
        <div className="space-y-6">
          {specializations.map((spec, index) => (
            <div 
              key={index}
              ref={el => blockRefs.current[index] = el}
              data-index={index}
              className={`transition-all duration-700 ease-out ${
                visibleBlocks[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`specialization-block-${index + 1}`}
            >
              {/* Card Container */}
              <div 
                className="bg-white rounded-2xl p-6 md:p-8"
                style={{
                  border: '1px solid #E9EEF5',
                  boxShadow: '0px 8px 24px rgba(11,31,58,0.06)'
                }}
              >
                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Side - Content */}
                  <div className="flex-1 lg:w-[60%]">
                    {/* Title */}
                    <h3 className="text-[20px] md:text-[22px] font-bold text-[#0A2540] leading-tight mb-5">
                      {spec.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[15px] text-gray-600 leading-[1.7] mb-6">
                      {spec.description}
                    </p>

                    {/* We will deliver */}
                    <div className="mb-6">
                      <p className="text-[14px] font-semibold text-[#0A2540] mb-3">
                        We will deliver:
                      </p>
                      <ul className="space-y-2">
                        {spec.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="inline-block w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-[14px] text-gray-600 leading-[1.6]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="border-t border-gray-200 pt-5">
                      <p className="text-[14px] text-gray-600 leading-[1.6]">
                        <span className="font-semibold text-[#0A2540]">Outcome:</span> {spec.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="lg:w-[40%] flex items-center justify-center">
                    <img 
                      src={spec.image}
                      alt={spec.imageAlt}
                      loading="lazy"
                      className="w-full max-w-[280px] lg:max-w-none h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ending Section - Centered */}
        <div 
          ref={closingRef}
          className={`mt-16 text-center transition-all duration-700 ease-out ${
            closingVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-[28px] md:text-[34px] font-semibold text-[#0A2540] mb-5 tracking-tight leading-[1.2]">
            We will build what's next.
          </h3>
          <p className="text-[15px] text-gray-500 leading-[1.7] max-w-xl mx-auto">
            We will partner with forward-looking teams to implement AI solutions that will continuously improve performance, strengthen competitiveness, and support scalable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFuture;
