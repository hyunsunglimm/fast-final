import React from 'react';
import { IsBackHeader } from '@/components/header';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='relative h-full w-full overflow-hidden bg-active'>
      <IsBackHeader href='/' title='버킷리스트' />
      {children}
    </main>
  );
};
export default layout;
