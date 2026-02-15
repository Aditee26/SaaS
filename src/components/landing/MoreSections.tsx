// src/components/landing/MoreSections.tsx
'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const MoreSections = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#FF9898] to-[#8054FF]">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          More Sections
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover all the amazing features and sections included in this template
        </p>
        <Button 
          size="lg"
          className="bg-white text-[#8054FF] hover:bg-gray-100 min-w-[200px]"
        >
          Download Template
        </Button>
      </div>
    </section>
  );
};