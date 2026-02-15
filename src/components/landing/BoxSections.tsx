// src/components/landing/BoxSections.tsx
'use client';

import { Card } from '@/components/ui/Card';

export const BoxSections = () => {
  const boxes = [
    {
      id: 1,
      title: "We're here to guide and help you at all times",
      description: "A good design is not only aesthetically pleasing, but also functional.",
      badge: "Powered"
    },
    {
      id: 2,
      title: "We're here to guide and help you at all times",
      description: "A good design is not only aesthetically pleasing, but also functional.",
      badge: "Powered"
    }
  ];

  return (
    <section className="py-24 bg-[#222228]">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Box Sections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {boxes.map((box) => (
            <Card
              key={box.id}
              className="bg-[#2A2A35] border border-[#3D3D49] rounded-2xl p-8 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Icon without image - using gradient background with icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF9898] transition-colors">
                    {box.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {box.description}
                  </p>
                  <span className="inline-block px-4 py-2 bg-[#1A1A22] rounded-lg text-sm text-gray-300">
                    {box.badge}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};