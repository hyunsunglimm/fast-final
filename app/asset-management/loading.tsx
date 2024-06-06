import React from 'react';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
import { CardSkeleton, SqureSkeleton } from '@/components/ui/skeleton';

const loading = () => {
  return (
    <>
      <LoadingBackdrop />
      <section className='space-y-8 px-20'>
        <SqureSkeleton />
        <CardSkeleton />
        <SqureSkeleton />
        <SqureSkeleton />
      </section>
    </>
  );
};
export default loading;
