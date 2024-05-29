'use client';
import React, { useCallback } from 'react';
import { StepOne, StepTwo, StepFour } from './step';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import NextButton from './NextButton';

type BucketStepFormProps = {
  currentStep: string | undefined;
};

export type QueryType = 'bucket-name' | 'target-amount' | 'spend-book' | 'saving-book';
export type TermsType = {
  'bucket-name': string;
  'target-amount': string;
};
const BucketStepForm = ({ currentStep }: BucketStepFormProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeQueryString = useCallback(
    (query: QueryType, term: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (term) {
        params.set(query, term);
      } else {
        params.delete(query);
      }
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, replace]
  );

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
