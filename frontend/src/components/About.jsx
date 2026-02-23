import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              About Nexline
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nexline General Trading FZ LLC is a UAE-based trading company specializing in the wholesale supply of electrical distribution systems, industrial automation components, mechanical equipment, power transmission solutions, and enterprise hardware.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through a global sourcing network across UAE, Europe, China, and South America, we support international buyers with reliable sourcing and efficient delivery.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/27111449/pexels-photo-27111449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Industrial warehouse"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
