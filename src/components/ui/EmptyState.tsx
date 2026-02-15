'use client';

import React from 'react';

interface EmptyStateProps {
  message: string;
  action?: React.ReactNode;
}

export const EmptyState = ({ message, action }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 bg-[#2A2A35] border border-[#3D3D49] rounded-xl">
      <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      </div>
      <p className="text-gray-300 text-center">{message}</p>
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
};