import React from 'react';

const LoadingBackdrop = () => {
  return (
    <div
      role='status'
      className='hide-scrollbar absolute inset-0 z-40 flex h-dvh w-full flex-col items-center justify-center bg-white/50 px-20 backdrop-blur-sm'
    >
      <JumpingDots />
    </div>
  );
};

export default LoadingBackdrop;

const JumpingDots = () => {
  return (
    <div
      role='status'
      className='jumping-dots-loader absolute z-50 flex items-center justify-center space-x-2'
    >
      <span className='h-[0.6rem] w-[0.6rem] rounded-full bg-primary '></span>
      <span className='h-[0.6rem] w-[0.6rem] rounded-full bg-primary '></span>
      <span className='h-[0.6rem] w-[0.6rem] rounded-full bg-primary '></span>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};
