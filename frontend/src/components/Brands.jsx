import React from 'react';

const Brands = () => {
  const industrialBrands = [
    'ABB',
    'Siemens',
    'Schneider Electric',
    'Rockwell Automation',
    'Yokogawa Electric',
    'Mitsubishi Electric',
    'General Electric'
  ];

  const itBrands = [
    'Dell Technologies',
    'Cisco Systems',
    'HP',
    'Kingston Technology',
    'Anker Innovations'
  ];

  return (
    <section id="brands" className="py-20 bg-[#F9FAFB]" aria-labelledby="brands-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 id="brands-heading" className="text-[32px] md:text-[36px] font-semibold text-[#0A2540] mb-4 tracking-tight leading-[1.2]">
            Brands We Supply
          </h2>
          <p className="text-[16px] text-gray-600 max-w-3xl mx-auto leading-[1.75]">
            Global manufacturers trusted across industrial and technology ecosystems.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {/* Column 1 - Industrial & Automation Systems */}
          <div>
            <h3 className="text-[16px] font-semibold text-[#0A2540] mb-5 pb-3 border-b border-gray-300 tracking-wide">
              Industrial & Automation Systems
            </h3>
            <ul className="space-y-3">
              {industrialBrands.map((brand, index) => (
                <li 
                  key={index}
                  className="text-[15px] font-medium text-gray-700 tracking-[0.2px] transition-all duration-200 hover:text-[#0A2540] hover:translate-x-1 cursor-default"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - IT & Infrastructure Technology */}
          <div>
            <h3 className="text-[16px] font-semibold text-[#0A2540] mb-5 pb-3 border-b border-gray-300 tracking-wide">
              IT & Infrastructure Technology
            </h3>
            <ul className="space-y-3">
              {itBrands.map((brand, index) => (
                <li 
                  key={index}
                  className="text-[15px] font-medium text-gray-700 tracking-[0.2px] transition-all duration-200 hover:text-[#0A2540] hover:translate-x-1 cursor-default"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
