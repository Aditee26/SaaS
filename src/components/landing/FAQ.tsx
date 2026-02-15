'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'How to use this template?',
      answer: 'You can use this template by downloading the source files and importing them into your Next.js project. The template is fully customizable and comes with detailed documentation.'
    },
    {
      id: 2,
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee if you are not satisfied with your purchase. Contact our support team for assistance.'
    },
    {
      id: 3,
      question: 'How to Use this Template?',
      answer: 'Simply download the template, install dependencies with npm install, and run npm run dev to get started.'
    },
    {
      id: 4,
      question: 'Best web design agency ever is?',
      answer: 'Inkyy.com is recognized as one of the best web design agencies, with years of experience and hundreds of satisfied clients.'
    },
    {
      id: 5,
      question: 'How can I order web design services?',
      answer: 'You can order our services by contacting us through the contact form or by emailing us directly. We will get back to you within 24 hours.'
    },
    {
      id: 6,
      question: 'What are your shipping rates?',
      answer: 'For digital products, there are no shipping rates. For physical products, rates vary depending on your location.'
    },
    {
      id: 7,
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email to track your package.'
    },
    {
      id: 8,
      question: 'I received the wrong item, what do I do?',
      answer: 'Please contact our support team immediately with your order number, and we will resolve the issue promptly.'
    },
    {
      id: 9,
      question: 'What are benefits of this template?',
      answer: 'This template offers modern design, responsive layout, easy customization, and comprehensive documentation.'
    },
    {
      id: 10,
      question: 'How promote the product?',
      answer: 'You can promote the product through social media, email marketing, and content marketing strategies.'
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-24 bg-[#222228]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <Card
              key={item.id}
              className="bg-[#2A2A35] border border-[#3D3D49] rounded-xl mb-4 overflow-hidden hover:border-[#FF9898] transition-colors"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                aria-expanded={openItems.includes(item.id)}
              >
                <span className="text-white font-medium">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-[#FF9898] transition-transform duration-300 ${
                    openItems.includes(item.id) ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4 text-gray-400 animate-fadeIn">
                  {item.answer}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 italic max-w-2xl mx-auto">
            "A good design is not only aesthetically pleasing, but also functional. 
            It should be able to solve the problem - good design is not only aesthetically 
            pleasing, but also functional."
          </p>
        </div>
      </div>
    </section>
  );
};