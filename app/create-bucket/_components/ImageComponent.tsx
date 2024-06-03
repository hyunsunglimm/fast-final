'use client';
import React from 'react';
import { getStepConfig } from '../createBucketConfig';
import Image from 'next/image';
import useOnloadImage from '@/hooks/useOnloadImage';

const getImgWidthClass = (stepIndex: number) => {
  if (stepIndex === 3) {
    return 'h-[15.5rem] w-[13.1rem]';
  }
  if (stepIndex === 4) {
    return 'h-[15.5rem] w-[13.2rem]';
  }
  return 'h-[15.5rem] w-[15.5rem]';
};
const ImageComponent = ({ stepIndex }: { stepIndex: number }) => {
  const { imgSrc, stepText } = getStepConfig(String(stepIndex));
  const imgWidth = getImgWidthClass(stepIndex);
  const { onLoadImage, onload } = useOnloadImage();
  return (
    <Image
      src={imgSrc}
      alt={`${stepText} 이미지`}
      width={155}
      height={155}
      className={imgWidth}
      quality={onload ? 100 : 10}
      priority
      onLoad={onLoadImage}
    />
  );
};

export default ImageComponent;
