import React from 'react';
import { Card } from '../card';

export const SqureSkeleton = () => {
  return (
    <Card
      role='status'
      className='flex aspect-square w-full animate-pulse flex-col justify-between p-20'
    >
      <div className='mt-0 w-full'>
        <div className='mb-20 h-2 w-16 rounded-full bg-gray-200'></div>
        <div className='w-full'>
          <div className='mb-2.5 h-4 rounded-full bg-gray-200'></div>
          <div className='h-4 max-w-[20rem] rounded-full bg-gray-200'></div>
        </div>
      </div>
      <div className='flex w-full flex-col justify-between gap-y-20'>
        <div className='h-24 w-full shrink-0 rounded bg-gray-200'></div>
      </div>
      <span className='sr-only'>Loading...</span>
    </Card>
  );
};
