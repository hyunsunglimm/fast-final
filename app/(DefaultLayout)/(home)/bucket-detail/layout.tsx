import React from 'react';
import DetailHeader from './_components/DetailHeader';
import TransitonContainer from '@/components/TransitonContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PORKO 버킷리스트',
  description: '버킷리스트 디테일 페이지'
};

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
