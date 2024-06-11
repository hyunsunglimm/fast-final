import React from 'react';
import Popup from '../_components/common/Popup';

import { DefaultHeader } from '@/components/header';
import SubmitEmojiProvider from '../context/SubmitEmojiProvider';

type CalendarLayoutProps = {
  children: React.ReactNode;
};

const CalendarLayout = ({ children }: CalendarLayoutProps) => {
  return (
    <>
      <Popup />
      <DefaultHeader title='가계부' defaultColor='#fff' isFixed={false} />
      <SubmitEmojiProvider>{children}</SubmitEmojiProvider>
    </>
  );
};
export default CalendarLayout;
