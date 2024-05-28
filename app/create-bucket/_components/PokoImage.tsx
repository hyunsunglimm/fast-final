import React from 'react';
import Image from 'next/image';
import { getStepConfig } from './BubbleText';
import FlexBox from '@/components/ui/FlexBox';
type PokoImageProps = {
  currentStep: string | undefined;
};

const getImgWidthClass = (stepIndex: number) => {
  if (stepIndex === 2) {
    return 'h-[14.4rem] w-[13.1rem]';
  }
  if (stepIndex === 3) {
    return 'h-[15.5rem] w-[13.2rem]';
  }
  return 'h-[15.5rem] w-[15.5rem]';
};

const PokoImage = ({ currentStep }: PokoImageProps) => {
  const stepIndex = currentStep ? Number(currentStep) : 0;
  const { imgSrc, stepText } = getStepConfig(currentStep);
  const imgWidth = getImgWidthClass(stepIndex);
  return (
    <FlexBox justifyContent='center' alignItems='center' className='mt-[5.3rem] w-full'>
      <Image
        src={imgSrc}
        alt={`${stepText} 이미지`}
        width={155}
        height={155}
        className={imgWidth}
        quality={100}
        priority
      />
    </FlexBox>
  );
};

export default PokoImage;
