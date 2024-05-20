import React from 'react';
import TransitonContainer from './_components/TransitonContainer';
import FixedBottom from './_components/FixedBottom';
import '@/app/globals.css';

const EditWidgetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransitonContainer>
      <div className='hide-scrollbar relative h-dvh overflow-y-scroll bg-white'>{children}</div>
      <FixedBottom />
    </TransitonContainer>
  );
};
export default EditWidgetLayout;
