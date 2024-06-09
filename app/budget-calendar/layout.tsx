import React from 'react';
import Popup from './_components/common/Popup';
import SubmitEmojiProvider from './context/SubmitEmojiProvider';
type CalendarLayoutProps = {
  children: React.ReactNode;
};

const CalendarLayout = ({ children }: CalendarLayoutProps) => {
  return (
    <>
      {/* <Popup /> */}
      <SubmitEmojiProvider>{children}</SubmitEmojiProvider>
    </>
  );
};
export default CalendarLayout;
