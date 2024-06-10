import React from 'react';
import { IsBackHeader } from '@/components/header';

const NotiLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <IsBackHeader title='알림' defaultColor='#ffffff' />
      <main className='bg-white px-20 pb-[13.2rem]'>{children}</main>
    </>
  );
};
export default NotiLayout;
