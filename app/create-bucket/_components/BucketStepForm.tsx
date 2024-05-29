'use client';
import React, { useCallback } from 'react';
import { StepOne, StepTwo, StepThree, StepFour } from './step';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

type BucketStepFormProps = {
  currentStep: string | undefined;
};

export type QueryType =
  | 'bucket-name'
  | 'target-amount'
  | 'spend-book'
  | 'saving-book'
  | 'day-of-week'
  | 'savings-amount'
  | 'my-saving-product';

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
      {currentStep === '3' && <StepThree handleChangeQueryString={handleChangeQueryString} />}
      {currentStep === '4' && <StepFour handleChangeQueryString={handleChangeQueryString} />}
    </form>
  );
};
export default BucketStepForm;
