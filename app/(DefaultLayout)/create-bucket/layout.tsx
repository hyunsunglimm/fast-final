import React from 'react';
import TransitonContainer from '@/components/TransitonContainer';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'PORKO 버킷 생성 페이지',
  description: '버킷 생성 페이지'
};

const CreateBucketLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransitonContainer>
      <main className='hide-scrollbar h-dvh overflow-hidden overflow-y-scroll bg-create-bucket bg-cover bg-no-repeat '>
        {children}
      </main>
    </TransitonContainer>
  );
};
export default CreateBucketLayout;
