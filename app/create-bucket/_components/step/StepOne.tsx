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

type StepOneProps = {
  handleChangeQueryString: (query: QueryType, term: string) => void;
};

const recommandedBucketData = [
  '🎁 부모님 명품 선물 사드리기',
  '🐮 친구랑 유럽여행가기',
  '💻 맥북 사기',
  '✈️ 제주도 여행',
  '📷 카메라 사기',
  '🏠 월세 보증금 구하기',
  '🏨 비싼 호텔에서 호캉스',
  '🐮 한우 오마카세 가보기'
];

export const StepOne = ({ handleChangeQueryString }: StepOneProps) => {
  const searchParams = useSearchParams();
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [inputValues, setInputValues] = useState({
    'bucket-name': searchParams.get('bucket-name') || '',
    'target-amount': searchParams.get('target-amount') || ''
  });
  const [displayValue, setDisplayValue] = useState({
    'bucket-name': searchParams.get('bucket-name') || '',
    'target-amount': searchParams.get('target-amount')
      ? Number(searchParams.get('target-amount')).toLocaleString()
      : ''
  });
  const [selectHasBucketData, setSelectHasBucketData] = useState(true);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const isSelectData = () => {
    setOpenBottomSheet(false);
  };

  useEffect(() => {
    handleChangeQueryString('bucket-name', inputValues['bucket-name']);
    if (inputValues['bucket-name']) {
      setSelectHasBucketData(false);
    } else {
      setSelectHasBucketData(true);
    }
  }, [handleChangeQueryString, inputValues['bucket-name'], searchParams]);

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
          // min={100000}
          // max={50000000}
          // step={10000}
          inputMode='numeric'
          value={Number(inputValues['target-amount']).toLocaleString()}
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
        buttonOptions={{ size: 'md', disabled: selectHasBucketData }}
        buttonType='button'
        onClick={() => isSelectData()}
      >
        <div className='mt-0 space-y-[0.8rem] py-20'>
          {recommandedBucketData.map((item, idx) => {
            return (
              <RecommandedBucketList
                value={searchParams.get('bucket-name'?.toString()) || ''}
                key={item}
                text={item}
                id={`${idx}`}
                handleInputChange={handleInputChange}
              />
            );
          })}
        </div>
      </BottomSheet>
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
