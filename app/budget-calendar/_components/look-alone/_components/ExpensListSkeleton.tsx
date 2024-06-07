import RoundedSkeleton from '@/app/create-bucket/_components/RoundedSkeleton';
import React from 'react';

const ExpensListSkeleton = () => {
  return (
    <div role='status' className='mt-20 animate-pulse px-20'>
      <div className='flex items-center justify-between'>
        <div className='h-6 w-32 rounded bg-gray-200'></div>
        <div className='h-8 w-16 rounded bg-gray-200'></div>
      </div>
      <div className='mt-10 flex justify-between gap-10'>
        <div className='h-40 w-1/2 rounded-md bg-gray-200'></div>
        <div className='h-40 w-1/2 rounded-md bg-gray-200'></div>
      </div>
      <div className='mt-20 space-y-8'>
        {[...Array(4)].map((_, idx) => (
          <RoundedSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ExpensListSkeleton;
