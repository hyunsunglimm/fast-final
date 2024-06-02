import dynamic from 'next/dynamic';
import React, { ChangeEvent, useState, useEffect, useCallback } from 'react';
import InputCard from '../InputCard';
import Input from '@/components/ui/Input';
import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { cn } from '@/utils/twMerge';
import { QueryType } from '../BucketStepForm';
import NextButton from '../NextButton';
import { recommandedBucketData } from '../../data';
import { deleteCommaReturnNumber } from '@/utils/deleteComma';
import { useCreateBucketContext, StateType } from '../../context/createBucketContext';
const BottomSheet = dynamic(() => import('@/components/BottomSheet'), { ssr: false });

type StepOneProps = {
  handleChangeQueryString: (query: QueryType, term: string) => void;
};

const StepOne = ({ handleChangeQueryString }: StepOneProps) => {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const { state, dispatch } = useCreateBucketContext();
  const { 'bucket-name': bucketName, 'target-amount': targetAmount } = state;

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      let newValue = value;
      if (name === 'target-amount') {
        const numericValue = deleteCommaReturnNumber(value);
        newValue = !isNaN(numericValue) ? numericValue.toLocaleString() : '50,000';
      }
      dispatch({
        type: 'SET_INPUT_VALUE',
        payload: { name: name as keyof StateType, value: newValue }
      });
    },
    [dispatch]
  );

  const handleSelectDone = () => {
    if (!bucketName) return;
    handleChangeQueryString('bucket-name', bucketName);
    setOpenBottomSheet(false);
  };

  useEffect(() => {
    handleChangeQueryString('bucket-name', bucketName);
  }, [handleChangeQueryString, bucketName]);

  useEffect(() => {
    handleChangeQueryString('target-amount', targetAmount);
  }, [handleChangeQueryString, targetAmount]);

  return (
    <>
      {/* 버킷 이름 */}
      <InputCard>
        <Input
          isTranslate
          placeholder='버킷리스트를 작성해주세요'
          id='bucket-name'
          name='bucket-name'
          border='nonborder'
          value={bucketName}
          onChange={handleInputChange}
          maxLength={16}
        />
      </InputCard>

      {/* 금액 */}
      <InputCard>
        <Input
          isTranslate
          placeholder='금액을 적어주세요'
          id='target-amount'
          name='target-amount'
          border='nonborder'
          trailingText='원'
          type='text'
          inputMode='numeric'
          value={targetAmount}
          onChange={handleInputChange}
        />
      </InputCard>

      {/* 추천 버킷 버튼 */}
      <FlexBox alignItems='end' justifyContent='center' className='mt-32 h-[11.3rem] w-full'>
        <button
          type='button'
          className='rounded-full border border-active px-12 py-8 text-active active:bg-active/10 active:text-active/80'
          onClick={() => setOpenBottomSheet(true)}
        >
          이런 버킷리스트 어때요 {'>'}
        </button>
      </FlexBox>

      {/* 바텀 시트 */}
      <BottomSheet
        title='추천 버킷리스트'
        buttonLabel='선택'
        isOpen={openBottomSheet}
        onClose={() => setOpenBottomSheet(false)}
        buttonOptions={{ size: 'md', disabled: bucketName ? false : true }}
        buttonType='button'
        onClick={() => handleSelectDone()}
      >
        <div className='mt-0 space-y-[0.8rem] py-20'>
          {recommandedBucketData.map((item) => {
            return (
              <RecommandedBucketList
                value={bucketName}
                key={item}
                text={item}
                id={item}
                handleInputChange={handleInputChange}
              />
            );
          })}
        </div>
      </BottomSheet>
      <NextButton
        disabled={!(bucketName && targetAmount.length > 5)}
        buttonLabel='다음'
        currentStep='1'
        type='button'
        asChild
      />
    </>
  );
};

export default StepOne;

//  추천 버킷 바텀 시트
type RecommandedBucketListProps = {
  id: string;
  text: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const RecommandedBucketList = ({
  text,
  id,
  handleInputChange,
  value
}: RecommandedBucketListProps) => {
  return (
    <label
      htmlFor={id}
      className={cn(
        flexBoxVariants({
          className:
            'cursor-pointer gap-12 rounded-full bg-gray-100 px-20 py-16 has-[:checked]:bg-select',
          alignItems: 'center'
        })
      )}
    >
      <input
        type='radio'
        className='hidden'
        aria-hidden
        name='bucket-name'
        value={text}
        id={id}
        defaultChecked={text === value}
        onChange={handleInputChange}
      />
      <Text sizes='16' weight='500'>
        {text}
      </Text>
    </label>
  );
};
