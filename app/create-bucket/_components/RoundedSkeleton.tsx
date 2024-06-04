import React from 'react';

const RoundedSkeleton = () => {
  return (
    <div role='status' className='flex w-full animate-pulse items-center space-x-8'>
      <div className='mb-4 h-20 w-full rounded-full bg-gray-200'></div>
    </div>
  );
};

export default RoundedSkeleton;
