import React from 'react';
import { SqureSkeleton } from '@/components/ui/skeleton';

const LoadingGrid = () => {
  return (
    <div className='grid grid-cols-2 gap-20 px-20'>
      {[...Array(6)].map((item, index) => (
        <SqureSkeleton key={index} />
      ))}
    </div>
  );
};

export default LoadingGrid;
