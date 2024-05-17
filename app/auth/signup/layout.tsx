import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <main className='h-screen bg-white px-20'>{children}</main>
);

export default AuthLayout;
