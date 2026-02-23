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
    <section id="brands" className="py-24 bg-[#0A2540]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Brands We Supply
        </h2>

        <Card className="bg-white border-none">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Column 1 */}
              <div className="space-y-5">
                {brandsColumn1.map((brand, index) => (
                  <div 
                    key={index}
                    className="text-xl md:text-2xl font-semibold text-[#0A2540] pb-4 border-b border-gray-200"
                  >
                    {brand}
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-5">
                {brandsColumn2.map((brand, index) => (
                  <div 
                    key={index}
                    className="text-xl md:text-2xl font-semibold text-[#0A2540] pb-4 border-b border-gray-200"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 pt-6 border-t border-[#D4AF37]">
              <p className="text-sm text-gray-600 text-center">
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
