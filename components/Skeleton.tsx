import React from 'react';

const Skeleton = () => {
  return (
    <div className='aspect-radio min-h-[16rem] w-full rounded-2xl p-4 shadow-3xl'>
      <div className='flex animate-pulse  space-x-4'>
        <div className='flex-1 space-y-2 py-10'>
          <div className='h-40 rounded bg-gray-200'></div>
          <div className='h-5 rounded bg-gray-200'></div>
          <div className='h-5 rounded bg-gray-200'></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
