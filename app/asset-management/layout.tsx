import React from 'react';
import { DefaultHeader } from '@/components/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PORKO 자산관리 페이지',
  description: '자산관리 페이지'
};

const AssetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DefaultHeader title='자산' defaultColor='#f2f4f6' />
      <main className='bg-gray-50'>{children}</main>
    </>
  );
};
export default AssetLayout;
