import React from 'react';
import TransitonContainer from '@/components/TransitonContainer';
const CreateBucketLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransitonContainer>
      <main className='hide-scrollbar h-dvh overflow-hidden overflow-y-scroll bg-create-bucket bg-cover bg-no-repeat '>
        {children}
      </main>
    </TransitonContainer>
  );
};
export default CreateBucketLayout;
