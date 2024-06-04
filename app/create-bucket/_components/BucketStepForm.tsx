'use client';
import dynamic from 'next/dynamic';
import React, { useCallback } from 'react';
import StepOne from './step/StepOne';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { CreateBucketProvider } from '../context/createBucketContext';
const StepTwo = dynamic(() => import('./step/StepTwo'), { ssr: false });
const StepThree = dynamic(() => import('./step/StepThree'), { ssr: false });
const StepFour = dynamic(() => import('./step/StepFour'), { ssr: false });

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
    <CreateBucketProvider>
      <form className='relative mt-32 flex flex-col gap-y-8'>
        {currentStep === '1' && <StepOne handleChangeQueryString={handleChangeQueryString} />}
        {currentStep === '2' && <StepTwo handleChangeQueryString={handleChangeQueryString} />}
        {currentStep === '3' && <StepThree handleChangeQueryString={handleChangeQueryString} />}
        {currentStep === '4' && <StepFour handleChangeQueryString={handleChangeQueryString} />}
      </form>
    </CreateBucketProvider>
  );
};
export default BucketStepForm;
