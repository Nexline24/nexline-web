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
    <section id="why-nexline" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-section-heading text-[#0A2540] mb-10">
              Why Nexline
            </h2>
            <ul className="space-y-5">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
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
                alt="Warehouse logistics"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNexline;
