import React from 'react';
import Popup from './_components/common/Popup';

type CalendarLayoutProps = {
  children: React.ReactNode;
};

const CalendarLayout = ({ children }: CalendarLayoutProps) => {
  return (
    <>
      {/* <Popup /> */}
      {children}
    </>
  );
};
export default CalendarLayout;
