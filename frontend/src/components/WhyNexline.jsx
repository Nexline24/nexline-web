import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyNexline = () => {
  const reasons = [
    'Global sourcing network (UAE, Europe, China, South America)',
    'Competitive international pricing',
    'DDP / DAP worldwide shipping solutions',
    'Strong supplier and distributor partnerships',
    'Export documentation and compliance expertise'
  ];

  return (
    <section id="why-nexline" className="py-20 bg-[#F9FAFB]" aria-labelledby="why-nexline-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 id="why-nexline-heading" className="text-[32px] md:text-[36px] font-semibold text-[#0A2540] mb-8 tracking-tight leading-[1.2]">
              Why Nexline
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span className="text-[16px] text-gray-700 leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1644079446600-219068676743?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MHx8fHwxNzcxNzM3NzcxfDA&ixlib=rb-4.1.0&q=85"
                alt="Global warehouse logistics and shipping operations"
                className="w-full h-[350px] lg:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNexline;
