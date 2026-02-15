'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated';
}

export const Card = ({ children, className = '', variant = 'default' }: CardProps) => {
  const variantClasses = {
    default: 'bg-[#2A2A35] border border-[#3D3D49]',
    elevated: 'bg-[#2A2A35] border border-[#3D3D49] shadow-xl',
  };

  return (
    <div className={`${variantClasses[variant]} rounded-xl ${className}`}>
      {children}
    </div>
  );
};