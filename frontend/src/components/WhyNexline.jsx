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
    <section id="why-nexline" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-10 tracking-tight">
              Why Nexline
            </h2>
            <ul className="space-y-5">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-lg text-gray-700 leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1644079446600-219068676743?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MHx8fHwxNzcxNzM3NzcxfDA&ixlib=rb-4.1.0&q=85"
                alt="Warehouse logistics"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNexline;
