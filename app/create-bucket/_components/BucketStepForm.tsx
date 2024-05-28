'use client';
import React from 'react';
import { StepOne, StepTwo, StepFour } from './step';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import NextButton from './NextButton';
import { debounce } from '@/utils/debounce';

type BucketStepFormProps = {
  currentStep: string | undefined;
};

const BucketStepForm = ({ currentStep }: BucketStepFormProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeQueryString = debounce((query: string, term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set(query, term);
    } else {
      params.delete(query);
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <form className='mt-24 flex flex-col gap-y-8'>
      {currentStep === '1' && <StepOne handleChangeQueryString={handleChangeQueryString} />}
      {currentStep === '2' && <StepTwo handleChangeQueryString={handleChangeQueryString} />}
      {currentStep === '3' && <StepTwo handleChangeQueryString={handleChangeQueryString} />}
      {currentStep === '4' && <StepFour handleChangeQueryString={handleChangeQueryString} />}
      <NextButton currentStep={currentStep} />
    </form>
  );
};
export default BucketStepForm;
