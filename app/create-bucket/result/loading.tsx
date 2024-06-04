import React from 'react';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
const loading = () => {
  return (
    <>
      <LoadingBackdrop />
      <section className='mt-[5.2rem] flex w-full animate-pulse flex-col items-center justify-center space-y-12 px-20'>
        <div className='h-20 w-full rounded-full bg-gray-200'></div>
        <div className='mb-24 h-80 w-1/2 rounded-full bg-gray-200'></div>
        <div className='w-full space-y-8'>
          <div className='flex w-full justify-between gap-8'>
            <div className='h-10 w-1/2 rounded-full bg-gray-200'></div>
            <div className='h-10 w-full rounded-full bg-gray-200'></div>
          </div>
          <div className='flex w-full justify-between gap-8'>
            <div className='h-10  w-1/2 rounded-full bg-gray-200'></div>
            <div className='h-10 w-full rounded-full bg-gray-200'></div>
          </div>
          <div className='flex w-full justify-between gap-8'>
            <div className='h-10  w-1/2 rounded-full bg-gray-200'></div>
            <div className='h-10 w-full rounded-full bg-gray-200'></div>
          </div>
          <div className='flex w-full justify-between gap-8'>
            <div className='h-10  w-1/2 rounded-full bg-gray-200'></div>
            <div className='h-10 w-full rounded-full bg-gray-200'></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default loading;
