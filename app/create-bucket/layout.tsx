import React from 'react';

const CreateBucketLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='hide-scrollbar h-dvh overflow-hidden overflow-y-scroll bg-create-bucket bg-cover bg-no-repeat '>
      <div className='relative bg-bucket-bubble bg-53 bg-[center_top_-10rem] bg-no-repeat px-20 pb-20'>
        {children}
      </div>
    </main>
  );
};
export default CreateBucketLayout;
