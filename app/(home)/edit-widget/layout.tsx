import { Metadata } from 'next';
import React from 'react';
import TransitonContainer from '@/components/TransitonContainer';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'PORKO 위젯 데이터 편집',
  description: '위젯 데이터 편집'
};

const EditWidgetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransitonContainer>
      <div className='hide-scrollbar relative h-dvh overflow-y-scroll bg-white'>{children}</div>
    </TransitonContainer>
  );
};
export default EditWidgetLayout;
