import React from 'react';

const OurFuture = () => {
  return (
    <section id="our-future" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h2 className="text-[56px] md:text-[64px] font-semibold text-[#0A2540] mb-12 tracking-tight leading-[1.1]">
          OUR FUTURE
        </h2>

        {/* Main Statement */}
        <p className="text-[24px] md:text-[28px] font-medium text-gray-700 leading-[1.5] mb-16 max-w-3xl mx-auto">
          Artificial Intelligence is the next stage of our operational evolution.
        </p>

        {/* Supporting Text */}
        <p className="text-[18px] text-gray-600 leading-[1.7] max-w-2xl mx-auto">
          We integrate intelligence to optimize workflows, reduce costs, and drive precision across industrial operations.
        </p>
      </div>
    </section>
  );
};

export default OurFuture;
