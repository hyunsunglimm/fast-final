/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useState, useEffect, useCallback } from 'react';
import InputCard from '../InputCard';
import Input from '@/components/ui/Input';
import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import { useSearchParams } from 'next/navigation';
import BottomSheet from '@/components/BottomSheet';
import Text from '@/components/ui/Text';
import { cn } from '@/utils/twMerge';
import { QueryType } from '../BucketStepForm';
import NextButton from '../NextButton';
import { recommandedBucketData } from '../../data';
import { deleteCommaReturnNumber } from '@/utils/deleteComma';

type StepOneProps = {
  handleChangeQueryString: (query: QueryType, term: string) => void;
};

export const StepOne = ({ handleChangeQueryString }: StepOneProps) => {
  const searchParams = useSearchParams();
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [inputValues, setInputValues] = useState({
    'bucket-name': searchParams.get('bucket-name') || '',
    'target-amount': searchParams.get('target-amount') || ''
  });

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue: string;
    if (name === 'target-amount') {
      const numericValue = deleteCommaReturnNumber(value);
      if (!isNaN(numericValue)) {
        newValue = numericValue.toLocaleString();
        setInputValues((prev) => ({ ...prev, [name]: newValue }));
      } else {
        newValue = '50,000';
        setInputValues((prev) => ({ ...prev, [name]: newValue }));
      }
    } else {
      setInputValues((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  const handleSelectDone = () => {
    if (!inputValues['bucket-name']) return;
    handleChangeQueryString('bucket-name', inputValues['bucket-name']);
    setOpenBottomSheet(false);
  };

  useEffect(() => {
    handleChangeQueryString('bucket-name', inputValues['bucket-name']);
  }, [handleChangeQueryString, inputValues['bucket-name']]);

  useEffect(() => {
    handleChangeQueryString('target-amount', inputValues['target-amount']);
  }, [handleChangeQueryString, inputValues['target-amount']]);

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
          value={inputValues['bucket-name']}
          onChange={handleInputChange}
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
          value={inputValues['target-amount']}
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
        buttonOptions={{ size: 'md', disabled: inputValues['bucket-name'] ? false : true }}
        buttonType='button'
        onClick={() => handleSelectDone()}
      >
        <div className='mt-0 space-y-[0.8rem] py-20'>
          {recommandedBucketData.map((item) => {
            return (
              <RecommandedBucketList
                value={inputValues['bucket-name']}
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
        disabled={!(inputValues['bucket-name'] && inputValues['target-amount'].length > 5)}
        buttonLabel='다음'
        currentStep='1'
        type='button'
        asChild
      />
    </>
  );
};

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
