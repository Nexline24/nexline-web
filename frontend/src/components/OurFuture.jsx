import React from 'react';

const OurFuture = () => {
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
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=300&h=300&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=300&fit=crop'
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
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop'
    }
  ];

  return (
    <section id="our-future" className="bg-white" style={{ marginTop: '120px' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-20">
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
              className="flex flex-col lg:flex-row gap-12 items-start"
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

                <p className="text-[16px] text-gray-600 leading-[1.7] italic">
                  <span className="font-semibold text-[#0A2540] not-italic">Outcome:</span> {spec.outcome}
                </p>
              </div>

              {/* Right Side - Image (35%) */}
              <div className="w-full lg:w-[35%] order-first lg:order-last">
                <img 
                  src={spec.image}
                  alt={spec.title}
                  loading="lazy"
                  className="w-full max-w-[260px] mx-auto lg:mx-0 lg:ml-auto h-auto rounded-lg opacity-80 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Ending Section */}
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