'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'CEO',
      company: 'Inkyy.com',
      content: 'Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.',
      rating: 5,
      image: '/assets/testimonial.png'
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.',
      rating: 5,
      image: '/assets/testimonial.png'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Creative Director',
      company: 'DesignHub',
      content: 'Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.',
      rating: 5,
      image: '/assets/testimonial.png'
    }
  ];

  return (
    <section className="py-24 bg-[#222228]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What our clients say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-[#2A2A35] border border-[#3D3D49] rounded-2xl p-8 hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#FF9898] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-full flex items-center justify-center text-white font-bold overflow-hidden">
                  {testimonial.image ? (
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-full h-full"
                    />
                  ) : (
                    <span>{testimonial.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role} of {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index
                  ? 'w-8 bg-gradient-to-r from-[#FF9898] to-[#8054FF]'
                  : 'bg-[#3D3D49] hover:bg-[#FF9898]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};