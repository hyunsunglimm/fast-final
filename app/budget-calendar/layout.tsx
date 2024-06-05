import React from 'react';
import { DefaultHeader } from '@/components/header';
import Popup from './_components/common/Popup';

type CalendarLayoutProps = {
  children: React.ReactNode;
};

const CalendarLayout = ({ children }: CalendarLayoutProps) => {
  return (
    <>
      {/* <Popup /> */}
      <DefaultHeader title='가계부' defaultColor='#fff' />
      <main className='min-h-full bg-white pb-[13.2rem]'>{children}</main>
    </>
  );
};
export default CalendarLayout;
