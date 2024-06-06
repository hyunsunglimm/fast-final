import React from 'react';
import { SqureSkeleton, CardSkeleton } from '@/components/ui/skeleton';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
const loading = () => {
  return (
    <div className='relative flex h-dvh flex-col gap-20 px-20'>
      <LoadingBackdrop />
      <CardSkeleton />
      <SqureSkeleton />
      <CardSkeleton />
    </div>
  );
};
export default loading;
