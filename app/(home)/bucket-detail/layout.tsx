import React from 'react';
import DetailHeader from './_components/DetailHeader';
import TransitonContainer from '@/components/TransitonContainer';

const BucketDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransitonContainer>
      <div className='relative h-dvh w-full overflow-hidden bg-active'>
        <DetailHeader />
        {children}
      </div>
    </TransitonContainer>
  );
};
export default BucketDetailLayout;
