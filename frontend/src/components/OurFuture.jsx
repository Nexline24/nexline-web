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
      bullets: [
        'Conversational AI voice solutions',
        'Intelligent call handling',
        'Enhance customer support'
      ],
      tagline: 'Deliver 24/7 automated support.',
      image: 'https://static.prod-images.emergentagent.com/jobs/0e9b3327-9faa-4aa5-804a-120d0d8ad0ae/images/074a114a690122d9893c9fed926d6841f6e1fdc42daa995c4440ecad62d68c0f.png',
      imageAlt: 'Microphone with waveform illustration'
    },
    {
      title: 'Process Automation & Workflow Optimization',
      bullets: [
        'Redesign internal workflows',
        'Automate repetitive tasks',
        'Increase productivity & accuracy'
      ],
      tagline: 'Streamline operations with AI.',
      image: 'https://static.prod-images.emergentagent.com/jobs/0e9b3327-9faa-4aa5-804a-120d0d8ad0ae/images/51fcab41ce4e9f5c4d346fe2fc8fa3d473aa6da4588e507bd23b2aebe60c5f06.png',
      imageAlt: 'Gears with digital circuit illustration'
    },
    {
      title: 'Data Analytics & Predictive Intelligence',
      bullets: [
        'Cost optimization models',
        'Demand forecasting insights',
        'Supplier performance analysis'
      ],
      tagline: 'Make smarter decisions with data.',
      image: 'https://static.prod-images.emergentagent.com/jobs/0e9b3327-9faa-4aa5-804a-120d0d8ad0ae/images/95ab8e7dfdbad4a35a5ae42e9accab4416876fcbb7f8f2868fa497a5b48fe770.png',
      imageAlt: 'Graph with node network illustration'
    }
  ];

  return (
    <section id="our-future" className="bg-white py-24" data-testid="our-future-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Centered Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ease-out ${
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
        <div className="space-y-5">
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
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={spec.image}
                    alt={spec.imageAlt}
                    loading="lazy"
                    className="w-14 h-14 md:w-16 md:h-16 object-contain flex-shrink-0"
                  />
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#0A2540] leading-tight">
                    {spec.title}
                  </h3>
                </div>
                
                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {spec.bullets.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></span>
                      <span className="text-[16px] md:text-[17px] text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-5">
                  {/* Tagline */}
                  <p className="text-[15px] md:text-[16px]">
                    <span className="text-[#D4AF37] font-semibold">{spec.tagline.split(' ').slice(0, 2).join(' ')}</span>
                    <span className="text-gray-600 font-medium"> {spec.tagline.split(' ').slice(2).join(' ')}</span>
                  </p>
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
