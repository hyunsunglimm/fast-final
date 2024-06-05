import React from 'react';
import { DefaultHeader } from '@/components/header';
import Popup from './_components/common/Popup';

type CalendarLayoutProps = {
  children: React.ReactNode;
};

const CalendarLayout = ({ children }: CalendarLayoutProps) => {
  return (
    <>
      <Popup />
      <DefaultHeader title='가계부' defaultColor='#fff' />
      {children}
    </>
  );
};
export default CalendarLayout;
