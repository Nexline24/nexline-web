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
      image: 'https://static.prod-images.emergentagent.com/jobs/0e9b3327-9faa-4aa5-804a-120d0d8ad0ae/images/074a114a690122d9893c9fed926d6841f6e1fdc42daa995c4440ecad62d68c0f.png',
      imageAlt: 'Microphone with waveform illustration'
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
      image: 'https://static.prod-images.emergentagent.com/jobs/0e9b3327-9faa-4aa5-804a-120d0d8ad0ae/images/51fcab41ce4e9f5c4d346fe2fc8fa3d473aa6da4588e507bd23b2aebe60c5f06.png',
      imageAlt: 'Gears with digital circuit illustration'
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
      image: 'https://static.prod-images.emergentagent.com/jobs/0e9b3327-9faa-4aa5-804a-120d0d8ad0ae/images/95ab8e7dfdbad4a35a5ae42e9accab4416876fcbb7f8f2868fa497a5b48fe770.png',
      imageAlt: 'Graph with node network illustration'
    }
  ];

  return (
    <section id="our-future" className="bg-white" style={{ marginTop: '120px' }} data-testid="our-future-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Centered Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-[48px] md:text-[56px] font-semibold text-[#0A2540] mb-6 tracking-tight leading-[1.1]">
            OUR FUTURE
          </h2>
          <p className="text-[28px] md:text-[32px] font-medium text-gray-700 leading-[1.4] mb-8">
            Intelligent Systems. Measurable Efficiency.
          </p>
          <p className="text-[17px] text-gray-600 leading-[1.7] max-w-4xl mx-auto">
            We will help organizations integrate practical AI solutions that will streamline operations, enhance customer experience, and reduce operational costs.
          </p>
        </div>

        {/* Specialization Blocks */}
        <div className="space-y-[100px]">
          {specializations.map((spec, index) => (
            <div 
              key={index}
              ref={el => blockRefs.current[index] = el}
              data-index={index}
              className={`flex flex-col lg:flex-row gap-12 items-start transition-all duration-700 ease-out ${
                visibleBlocks[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '100ms' }}
              data-testid={`specialization-block-${index + 1}`}
            >
              {/* Left Side - Text (65%) */}
              <div className="w-full lg:w-[65%]">
                <h3 className="text-[24px] font-semibold text-[#0A2540] mb-6 tracking-tight">
                  {spec.title}
                </h3>
                
                <p className="text-[17px] text-gray-700 leading-[1.7] mb-8">
                  {spec.description}
                </p>

                <div className="mb-8">
                  <p className="text-[16px] font-semibold text-[#0A2540] mb-4">
                    We will deliver:
                  </p>
                  <ul className="space-y-3">
                    {spec.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="inline-block w-1.5 h-1.5 bg-[#0A2540] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-[16px] text-gray-700 leading-[1.7]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[16px] text-gray-600 leading-[1.7]">
                  <span className="font-semibold text-[#0A2540]">Outcome:</span> {spec.outcome}
                </p>
              </div>

              {/* Right Side - Image (35%) - Stacks BELOW text on mobile */}
              <div className="w-full lg:w-[35%] flex justify-center lg:justify-end">
                <img 
                  src={spec.image}
                  alt={spec.imageAlt}
                  loading="lazy"
                  className="w-[260px] h-auto"
                  style={{ maxWidth: '260px' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Ending Section - Full Width, Left Aligned */}
        <div className="mt-[120px] pb-24">
          <h3 className="text-[36px] md:text-[42px] font-semibold text-[#0A2540] mb-8 tracking-tight leading-[1.2]">
            We will build what's next.
          </h3>
          <p className="text-[17px] text-gray-700 leading-[1.7] max-w-4xl">
            We will partner with forward-looking teams to implement AI solutions that will continuously improve performance, strengthen competitiveness, and support scalable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFuture;