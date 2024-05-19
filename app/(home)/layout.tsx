import React from 'react';
import { DefaultHeader } from '@/components/Header';
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='pb-[13.2rem]'>
      <DefaultHeader title='Home' isHome={true} />
      {children}
    </div>
  );
};
export default HomeLayout;
