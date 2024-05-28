import React from 'react';

const CreateBucketLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='bg-create-bucket bg-cover bg-no-repeat pb-20'>
      <div className='relative h-full bg-bucket-bubble bg-53 bg-[center_top_-10rem] bg-no-repeat px-20'>
        {children}
      </div>
    </main>
  );
};
export default CreateBucketLayout;
