import React from 'react';
import FlexBox from '@/components/ui/FlexBox';
import ImageComponent from './ImageComponent';

type PorkoImageProps = {
  currentStep: string | undefined;
};

const PorkoImage = ({ currentStep }: PorkoImageProps) => {
  const stepIndex = currentStep ? Number(currentStep) : 0;

  return (
    <FlexBox justifyContent='center' alignItems='center' className='mt-[5.3rem] w-full'>
      <ImageComponent stepIndex={stepIndex} />
    </FlexBox>
  );
};

export default PorkoImage;
