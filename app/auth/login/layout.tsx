import React from 'react';
import AuthHeader from '../_components/AuthHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PORKO | 로그인',
  description: 'PORKO 로그인 페이지'
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='relative h-full bg-white'>
      <AuthHeader currentStep='1' title='로그인' isSignup={false} />
      {children}
    </section>
  );
};
export default layout;
