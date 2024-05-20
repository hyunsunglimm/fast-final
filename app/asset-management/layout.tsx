import React from 'react';
import { DefaultHeader } from '@/components/Header';

const AssetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DefaultHeader title='자산' />
      {children}
    </>
  );
};
export default AssetLayout;
