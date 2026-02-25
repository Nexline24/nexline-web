import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F9FAFB]" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 id="about-heading" className="text-[32px] md:text-[36px] font-semibold text-[#0A2540] mb-6 tracking-tight leading-[1.2]">
              About Nexline
            </h2>
            <p className="text-[16px] text-gray-700 leading-[1.75] mb-5">
              Nexline General Trading FZ LLC is a UAE-based trading company specializing in the wholesale supply of electrical distribution systems, industrial automation components, mechanical equipment, power transmission solutions, and enterprise hardware.
            </p>
            <p className="text-[16px] text-gray-700 leading-[1.75]">
              Through a global sourcing network across UAE, Europe, China, and South America, we support international buyers with reliable sourcing and efficient delivery.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/27111449/pexels-photo-27111449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Industrial warehouse with electrical equipment and distribution systems"
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

export default About;
