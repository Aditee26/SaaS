'use client';

import { Spinner } from './Spinner';

interface LoadingProps {
  text?: string;
}

export const Loading = ({ text = 'Loading...' }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Spinner size="lg" />
      <p className="text-gray-400">{text}</p>
    </div>
  );
};