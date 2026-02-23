import React from 'react';
import { Card, CardContent } from './ui/card';

const Brands = () => {
  const brandsColumn1 = [
    'ABB',
    'Siemens',
    'Schneider Electric',
    'Rockwell Automation'
  ];

  const brandsColumn2 = [
    'Emerson Electric',
    'Dell Technologies',
    'Kingston Technology',
    'Anker Innovations'
  ];

  return (
    <section id="brands" className="section-padding bg-[#0A2540]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-section-heading text-white text-center mb-20">
          Brands We Supply
        </h2>

        <Card className="bg-white border-none shadow-2xl">
          <CardContent className="p-12 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {/* Column 1 */}
              <div className="space-y-6">
                {brandsColumn1.map((brand, index) => (
                  <div 
                    key={index}
                    className="text-[20px] font-semibold text-[#0A2540] pb-5 border-b-[1px] border-gray-200 last:border-0 tracking-[0.3px] transition-colors duration-200 hover:text-[#D4AF37] cursor-default"
                  >
                    {brand}
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                {brandsColumn2.map((brand, index) => (
                  <div 
                    key={index}
                    className="text-[20px] font-semibold text-[#0A2540] pb-5 border-b-[1px] border-gray-200 last:border-0 tracking-[0.3px] transition-colors duration-200 hover:text-[#D4AF37] cursor-default"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 pt-8 border-t-[1px] border-[#D4AF37]">
              <p className="text-[16px] text-gray-500 text-center font-medium leading-[1.8]">
                Representative global brands supplied based on availability.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Brands;
