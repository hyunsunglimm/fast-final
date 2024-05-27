import { Metadata } from 'next';
import React from 'react';
import TransitonContainer from './_components/TransitonContainer';
import FixedBottom from './_components/FixedBottom';
import '@/app/globals.css';

export const metadata: Metadata = {
  description: '위젯 데이터 편집'
};

const EditWidgetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransitonContainer>
      <div className='hide-scrollbar relative h-dvh overflow-y-scroll bg-white'>{children}</div>
      <FixedBottom />
    </TransitonContainer>
  );
};
export default EditWidgetLayout;
