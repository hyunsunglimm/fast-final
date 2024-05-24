import React from 'react';
import Skeleton from '@/components/Skeleton';

const LoadingGrid = () => {
  return (
    <div className='grid grid-cols-2 gap-20 px-20'>
      {[...Array(6)].map((item, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
};

export default LoadingGrid;
