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
    <section id="brands" className="py-28 bg-[#0A2540]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 tracking-tight">
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
                    className="text-2xl md:text-3xl font-semibold text-[#0A2540] pb-5 border-b-2 border-gray-100 last:border-0 tracking-tight"
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
                    className="text-2xl md:text-3xl font-semibold text-[#0A2540] pb-5 border-b-2 border-gray-100 last:border-0 tracking-tight"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 pt-8 border-t-2 border-[#D4AF37]">
              <p className="text-sm text-gray-500 text-center font-medium">
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
