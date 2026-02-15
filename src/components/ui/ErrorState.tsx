'use client';

import { Button } from './Button';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorState = ({ message, onRetry }: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 bg-[#2A2A35] border border-[#3D3D49] rounded-xl">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p className="text-gray-300 text-center">{message}</p>
      {onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
          className="border-[#3D3D49] text-white hover:bg-[#3D3D49]"
        >
          Try Again
        </Button>
      )}
    </div>
  );
};