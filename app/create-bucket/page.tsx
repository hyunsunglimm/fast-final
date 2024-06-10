import React from 'react';
import BucketFlowHeader from './_components/BucketFlowHeader';
import BubbleText from './_components/BubbleText';
import PorkoImage from './_components/PorkoImage';
import BucketStepForm from './_components/BucketStepForm';

type CreateBucketPageProps = {
  searchParams: Record<string, string | undefined>;
};

const CreateBucketPage = ({ searchParams }: CreateBucketPageProps) => {
  const currentStep = searchParams.step ?? '1';

  return (
    <div className='relative min-h-dvh bg-bucket-bubble bg-53 bg-[center_top_-10rem] bg-no-repeat px-20 pb-20'>
      <BucketFlowHeader currentStep={currentStep} />
      <BubbleText currentStep={currentStep} />
      <PorkoImage currentStep={currentStep} />
      <BucketStepForm currentStep={currentStep} />
    </div>
  );
};
export default CreateBucketPage;
