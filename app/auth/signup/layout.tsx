import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <section className='relative h-full bg-white'>{children}</section>
);
export default AuthLayout;
