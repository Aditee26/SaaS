// src/components/landing/Pricing.tsx
'use client';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface PricingPlan {
  id: number;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export const Pricing = () => {
  const plans: PricingPlan[] = [
    {
      id: 1,
      name: 'Silver Package',
      price: 40,
      features: [
        '100+ free templates',
        '10 hours members',
        'Priority support',
        'Premium features',
        'No integrations'
      ]
    },
    {
      id: 2,
      name: 'Golden Package',
      price: 70,
      features: [
        '100+ free templates',
        '10 hours members',
        'Priority support',
        'Premium features',
        'No integrations'
      ],
      isPopular: true
    },
    {
      id: 3,
      name: 'Premium Package',
      price: 120,
      features: [
        '100+ free templates',
        '10 hours members',
        'Priority support',
        'Premium features',
        'No integrations'
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#222228]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`bg-[#2A2A35] border rounded-2xl p-8 hover:scale-105 transition-all duration-300 relative ${
                plan.isPopular 
                  ? 'border-[#FF9898] shadow-lg shadow-[#FF9898]/10' 
                  : 'border-[#3D3D49]'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] text-white px-4 py-1 rounded-full text-sm">
                    Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400"> /mo</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <svg className="w-5 h-5 text-[#8054FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                fullWidth 
                variant={plan.isPopular ? 'primary' : 'outline'}
                className={plan.isPopular ? '' : 'border-[#3D3D49] text-white hover:bg-[#3D3D49]'}
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};