import React from 'react';
import { Card, CardContent } from './ui/card';

const Solutions = () => {
  const solutions = [
    {
      title: 'Electrical Distribution Boards',
      description: 'LV/MV distribution boards and power control panels sourced from certified global manufacturers.',
      images: [
        'https://images.pexels.com/photos/5767595/pexels-photo-5767595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.unsplash.com/photo-1576446470246-499c738d1c8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwyfHxlbGVjdHJpY2FsJTIwcGFuZWx8ZW58MHx8fHwxNzcxODEyMzIzfDA&ixlib=rb-4.1.0&q=85'
      ]
    },
    {
      title: 'Industrial Automation & PLC Systems',
      description: 'PLC modules, control systems, and industrial communication components.',
      images: [
        'https://images.unsplash.com/photo-1563456019560-2b37aa7ad890?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHxjb250cm9sJTIwY2FiaW5ldHxlbnwwfHx8fDE3NzE4MTIzMzJ8MA&ixlib=rb-4.1.0&q=85',
        'https://images.unsplash.com/photo-1753272691001-4d68806ac590?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwzfHxjb250cm9sJTIwY2FiaW5ldHxlbnwwfHx8fDE3NzE4MTIzMzJ8MA&ixlib=rb-4.1.0&q=85',
        'https://images.pexels.com/photos/5532717/pexels-photo-5532717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      ]
    },
    {
      title: 'Power Generation & Transmission Equipment',
      description: 'Components supporting power generation and transmission infrastructure.',
      images: [
        'https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRyYW5zZm9ybWVyfGVufDB8fHx8MTc3MTgxMjMzNnww&ixlib=rb-4.1.0&q=85',
        'https://images.pexels.com/photos/9889054/pexels-photo-9889054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.unsplash.com/photo-1728808668151-1ff0b42866a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxwb3dlciUyMHRyYW5zZm9ybWVyfGVufDB8fHx8MTc3MTgxMjMzNnww&ixlib=rb-4.1.0&q=85'
      ]
    },
    {
      title: 'Mechanical Equipment & Industrial Spare Parts',
      description: 'Industrial-grade mechanical systems and precision spare components.',
      images: [
        'https://images.unsplash.com/photo-1759159091682-3b98f4759367',
        'https://images.pexels.com/photos/149387/pexels-photo-149387.jpeg',
        'https://images.unsplash.com/photo-1720670996646-2f5d69a10ee7'
      ]
    },
    {
      title: 'Inspection & Testing Devices',
      description: 'Industrial diagnostic, calibration, and testing instruments.',
      images: [
        'https://images.unsplash.com/photo-1758295746012-41650245a9bb',
        'https://images.unsplash.com/photo-1619345371662-fccc15cc4814',
        'https://images.unsplash.com/photo-1646956141590-9503c35a27cf'
      ]
    },
    {
      title: 'Industrial & Enterprise Hardware Components',
      description: 'High-performance NVMe SSD storage and industrial-grade hardware solutions for enterprise and automation environments.',
      images: [
        'https://images.unsplash.com/photo-1762163516269-3c143e04175c',
        'https://images.pexels.com/photos/5222605/pexels-photo-5222605.jpeg',
        'https://images.pexels.com/photos/17489151/pexels-photo-17489151.jpeg'
      ]
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-section-heading text-[#0A2540] text-center mb-20">
          Core Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-7">
                <h3 className="text-subsection text-[#0A2540] mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-[16px]">
                  {solution.description}
                </p>
                
                {/* Image Strip - Perfectly Aligned */}
                <div className="grid grid-cols-3 gap-3">
                  {solution.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="aspect-square overflow-hidden rounded-md">
                      <img
                        src={image}
                        alt={`${solution.title} ${imgIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
