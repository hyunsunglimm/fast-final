import React from 'react';
import { SqureSkeleton, CardSkeleton } from '@/components/ui/skeleton';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
const loading = () => {
  return (
    <>
      <LoadingBackdrop />
      <div className='relative space-y-8 px-20'>
        <CardSkeleton />
        <SqureSkeleton />
        <CardSkeleton />
      </div>
    </>
  );
};
export default loading;
