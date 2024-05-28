import React from 'react';
import { StepOne, StepTwo, StepFour } from './step';
type BucketStepFormProps = {
  currentStep: string | undefined;
};

const BucketStepForm = ({ currentStep }: BucketStepFormProps) => {
  return (
    <form className='mb-24 mt-24 space-y-[0.8rem]'>
      {currentStep === '1' && <StepOne />}
      {currentStep === '2' && <StepTwo />}
      {currentStep === '3' && <StepTwo />}
      {currentStep === '4' && <StepFour />}
    </form>
  );
};
export default BucketStepForm;
