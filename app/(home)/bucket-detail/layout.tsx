import React from 'react';
import DetailHeader from './_components/DetailHeader';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative h-dvh w-full overflow-hidden bg-active'>
      <DetailHeader />
      {children}
    </div>
  );
};
export default layout;
