/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useCallback, useState, useEffect, useRef } from 'react';
import InputCard from '../InputCard';
import Input from '@/components/ui/Input';
import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import { useSearchParams } from 'next/navigation';
import BottomSheet from '@/components/BottomSheet';
import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';
import { cn } from '@/utils/twMerge';
import { QueryType } from '../BucketStepForm';
import NextButton from '../NextButton';
import { dayOfTheWeek } from '../../data';
import { deleteCommaReturnNumber } from '@/utils/deleteComma';
import { calculateSavingPlan } from '@/utils/dateUtils';

type StepThreeProps = {
  handleChangeQueryString: (query: QueryType, term: string) => void;
};

export const StepThree = ({ handleChangeQueryString }: StepThreeProps) => {
  const searchParams = useSearchParams();
  const targetAmountRef = useRef<string | null>(searchParams.get('target-amount'));
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [expireDate, setExpireDate] = useState<Date>(new Date());
  const [inputValues, setInputValues] = useState({
    'day-of-week': searchParams.get('day-of-week') || '',
    'savings-amount': searchParams.get('savings-amount') || ''
  });

  const handleChangeInputValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue: string;
    if (name === 'savings-amount') {
      const targetAmount = deleteCommaReturnNumber(targetAmountRef.current ?? '');
      const numericValue = deleteCommaReturnNumber(value);
      if (numericValue >= targetAmount) {
        setInputValues((prev) => ({ ...prev, [name]: targetAmount.toLocaleString() }));
        return;
      }
      if (!isNaN(numericValue)) {
        newValue = numericValue.toLocaleString();
      } else {
        newValue = '';
      }
      setInputValues((prev) => ({ ...prev, [name]: newValue }));
      return;
    }
    setInputValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleOpenSpendBookBtSheet = () => {
    setOpenBottomSheet(true);
  };

  const handleSelectDoneDayOfWeek = () => {
    if (!inputValues['day-of-week']) return;
    handleChangeQueryString('day-of-week', inputValues['day-of-week']);
    setOpenBottomSheet(false);
  };

  useEffect(() => {
    if (inputValues['savings-amount']) {
      const targetAmount = deleteCommaReturnNumber(targetAmountRef.current ?? '');
      const numericValue = deleteCommaReturnNumber(inputValues['savings-amount']);
      const { completionDate } = calculateSavingPlan(targetAmount, numericValue, new Date());
      setExpireDate(completionDate);
    }
    handleChangeQueryString('savings-amount', inputValues['savings-amount']);
  }, [handleChangeQueryString, inputValues['savings-amount']]);

  return (
    <>
      <InputCard>
        <Input
          readOnly
          className='peer/spend z-10 cursor-pointer caret-transparent'
          placeholder='요일을 선택해주세요'
          id='day-of-week'
          border='nonborder'
          onFocus={handleOpenSpendBookBtSheet}
          value={inputValues['day-of-week']}
          isTranslate
          inputMode='none'
        />
        <Icon
          src='/icons/system-icon/arrow/arrow-down.svg'
          alt='아래 화살표 아이콘'
          size='20'
          className='absolute right-[2rem]'
        />
      </InputCard>
      <InputCard>
        <Input
          isTranslate
          type='text'
          placeholder='금액을 적어주세요'
          id='savings-amount'
          name='savings-amount'
          border='nonborder'
          value={inputValues['savings-amount']}
          inputMode='numeric'
          trailingText='원'
          onChange={handleChangeInputValues}
        />
      </InputCard>
      <FlexBox alignItems='start' justifyContent='center' className='mt-32 h-[11.3rem] w-full'>
        {inputValues['day-of-week'] && inputValues['savings-amount'].length >= 5 ? (
          <FlexBox
            alignItems='center'
            justifyContent='center'
            className='w-full rounded-2xl bg-white p-16'
          >
            <Text weight='500'>
              <span className='text-primary'>
                {expireDate?.getFullYear()}년 {expireDate?.getMonth() + 1}월 {expireDate?.getDate()}
                일
              </span>{' '}
              만기 예정이에요
            </Text>
          </FlexBox>
        ) : null}
      </FlexBox>

      {/* 상품 선택 바텀 시트 */}
      <BottomSheet
        title='요일선택'
        buttonLabel='선택'
        isOpen={openBottomSheet}
        onClose={() => setOpenBottomSheet(false)}
        buttonOptions={{ size: 'md', disabled: inputValues['day-of-week'] ? false : true }}
        buttonType='button'
        onClick={() => handleSelectDoneDayOfWeek()}
      >
        <div className='mt-0 space-y-[0.8rem]'>
          {dayOfTheWeek.map((item) => {
            return (
              <BottomSheetCard
                key={item}
                item={item}
                onChange={handleChangeInputValues}
                value={inputValues['day-of-week']}
                name='day-of-week'
              />
            );
          })}
        </div>
      </BottomSheet>

      <NextButton
        disabled={!(inputValues['savings-amount'].length > 3 && inputValues['day-of-week'])}
        buttonLabel='다음'
        currentStep='3'
        type='button'
        asChild
      />
    </>
  );
};

// 바텀시트 내용

type BottomSheetCard = {
  item: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

const BottomSheetCard = ({ item, value, onChange, name }: BottomSheetCard) => {
  return (
    <>
      <label
        htmlFor={item}
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
          name={name}
          id={item}
          value={item}
          defaultChecked={item === value}
          onChange={onChange}
        />
        <Text sizes='16' weight='500'>
          {item}
        </Text>
      </label>
    </>
  );
};
