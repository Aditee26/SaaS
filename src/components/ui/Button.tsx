'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses = 'rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8054FF]/50';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#FF9898] to-[#8054FF] text-white hover:opacity-90 disabled:opacity-50',
    secondary: 'bg-[#2A2A35] text-white hover:bg-[#3D3D49] disabled:opacity-50',
    outline: 'border border-[#3D3D49] text-gray-300 hover:bg-[#3D3D49] hover:text-white disabled:opacity-50',
    ghost: 'text-gray-300 hover:text-white hover:bg-[#2A2A35] disabled:opacity-50',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};