import React from 'react';
import InputCard from '../InputCard';
import Input from '@/components/ui/Input';
import FlexBox from '@/components/ui/FlexBox';
import { QueryType } from '../BucketStepForm';
type StepFourProps = {
  handleChangeQueryString: (query: QueryType, term: string) => void;
};
export const StepFour = ({ handleChangeQueryString }: StepFourProps) => {
  return (
    <>
      <InputCard>
        <Input placeholder='버킷리스트를 작성해주세요' id='bucket-list' border='nonborder' />
      </InputCard>

      <FlexBox
        alignItems='end'
        justifyContent='center'
        className='mt-32 h-[11.3rem] w-full'
      ></FlexBox>
    </>
  );
};
