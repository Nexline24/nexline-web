import React from 'react';
import { ArrowRight } from 'lucide-react';

const OurFuture = () => {
  const valuePoints = [
    'Workflow optimization',
    'Predictive performance insight',
    'Smart resource allocation',
    'Automated decision layers',
    'Data-to-strategy transformation'
  ];

  const performanceLoop = [
    'Data',
    'Insight',
    'Action',
    'Optimization',
    'Cost Reduction',
    'Continuous Improvement'
  ];

  return (
    <section id="our-future" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Headline */}
        <h2 className="text-hero text-[#0A2540] text-center mb-6 max-w-[900px] mx-auto">
          Engineering Intelligence for the Next Industrial Era
        </h2>

        {/* Strong Tagline */}
        <p className="text-tagline text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Intelligence that Reduces Cost. Enhances Performance. Drives Precision.
        </p>

        {/* Introduction Paragraph */}
        <p className="text-body-premium text-gray-700 text-center mb-20 max-w-3xl mx-auto">
          At Nexline, Artificial Intelligence is the next stage of operational evolution. We integrate AI to improve functionality, optimize workflows, and reduce structural costs.
        </p>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column */}
          <div>
            <h3 className="text-subsection text-[#0A2540] mb-6">
              Applied Artificial Intelligence
            </h3>
            <p className="text-body-premium text-gray-700 mb-8 leading-relaxed">
              Under our licensed activity in Innovation & Artificial Intelligence Research, we design structured AI frameworks built for measurable results. Our team brings years of industry experience, allowing us to identify where AI creates real performance advantage.
            </p>
            <div className="inline-block px-6 py-3 bg-gray-50 border-l-4 border-[#D4AF37]">
              <p className="text-[16px] font-semibold text-[#0A2540] tracking-wide">
                Industry-backed. Data-driven. Results-focused.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-subsection text-[#0A2540] mb-6">
              Where Intelligence Creates Value
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

        {/* Performance Loop */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
            {performanceLoop.map((step, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <span className="text-[16px] font-semibold text-[#0A2540] tracking-wide">
                    {step}
                  </span>
                </div>
                {index < performanceLoop.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-[#D4AF37]" strokeWidth={2.5} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Final Closing Statement */}
        <div className="text-center pt-12 border-t border-gray-200">
          <p className="text-[22px] font-semibold text-[#0A2540] tracking-tight leading-relaxed">
            AI is not an addition to our business.<br />
            It is the direction of our future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFuture;
