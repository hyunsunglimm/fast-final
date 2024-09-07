import React from 'react';
import { SqureSkeleton, CardSkeleton } from '@/components/ui/skeleton';

const LoadingGrid = () => {
  return (
    <section className='px-20'>
      <div className='mb-20 grid grid-cols-2 gap-20'>
        {[...Array(6)].map((item, index) => (
          <SqureSkeleton key={index} />
        ))}
      </div>
      <div className='mb-[13.5rem] w-full space-y-5'>
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </section>
  );
};

export default LoadingGrid;
