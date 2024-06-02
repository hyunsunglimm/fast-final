import React from 'react';
import { SqureSkeleton, CardSkeleton } from '@/components/ui/skeleton';

const loading = () => {
  return (
    <div className='space-y-10 px-20'>
      <CardSkeleton />
      <SqureSkeleton />
      <CardSkeleton />
    </div>
  );
};
export default loading;
