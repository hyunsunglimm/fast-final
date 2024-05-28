import React from 'react';
import BucketFlowHeader from './_components/BucketFlowHeader';
import BubbleText from './_components/BubbleText';
import PorkoImage from './_components/PorkoImage';
import BucketStepForm from './_components/BucketStepForm';

type CreateBucketPageProps = {
  searchParams: Record<string, string | undefined>;
};

const CreateBucketPage = ({ searchParams }: CreateBucketPageProps) => {
  const currentStep = searchParams.step;

  return (
    <>
      <BucketFlowHeader currentStep={currentStep} />
      <BubbleText currentStep={currentStep} />
      <PorkoImage currentStep={currentStep} />
      <BucketStepForm currentStep={currentStep} />
    </>
  );
};
export default CreateBucketPage;
