import React from 'react';
import { Card } from '../card';

export const CardSkeleton = () => {
  return (
    <Card role='status' className='flex animate-pulse items-center space-x-8 p-20'>
      <div className='mt-0 w-full space-y-8'>
        <div className='mb-4 h-2 w-16 rounded-full bg-gray-200'></div>
        <div className='w-full'>
          <div className='mb-2.5 h-4 rounded-full bg-gray-200'></div>
          <div className='h-4 rounded-full bg-gray-200'></div>
        </div>
      </div>
      <div className='h-40 w-40 shrink-0 rounded bg-gray-200'></div>
      <span className='sr-only'>Loading...</span>
    </Card>
  );
};
