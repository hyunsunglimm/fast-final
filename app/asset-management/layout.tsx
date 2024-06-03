import React from 'react';
import { DefaultHeader } from '@/components/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PORKO 자산관리 페이지',
  description: '자산관리 페이지'
};

type MyAssetPageLayoutProps = {
  children: React.ReactNode;
  UpcomingScheduleSection: React.ReactNode;
  MyAssetsGraphSection: React.ReactNode;
};

const MyAssetPageLayout = ({
  children,
  UpcomingScheduleSection,
  MyAssetsGraphSection
}: MyAssetPageLayoutProps) => {
  return (
    <>
      <DefaultHeader title='자산' defaultColor='#f2f4f6' />
      <main className='bg-gray-50'>
        {children}
        <section className='px-20'>{UpcomingScheduleSection}</section>
        <section className='px-20 pb-[13.2rem]'>{MyAssetsGraphSection}</section>
      </main>
    </>
  );
};
export default MyAssetPageLayout;
