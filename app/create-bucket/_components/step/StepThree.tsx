import dynamic from 'next/dynamic';
import React, { ChangeEvent, useCallback, useState, useEffect } from 'react';
import InputCard from '../InputCard';
import Input from '@/components/ui/Input';
import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';
import { cn } from '@/shared/utils/twMerge';
import { QueryType } from '../BucketStepForm';
import NextButton from '../NextButton';
import { dayOfTheWeek } from '../../data';
import { deleteCommaReturnNumber } from '@/shared/utils/deleteComma';
import { calculateSavingPlan } from '@/shared/utils/dateUtils';
import { useCreateBucket } from '../../hooks/useCreateBucket';
import type { StateType } from '../../types';
const BottomSheet = dynamic(() => import('@/components/BottomSheet'), { ssr: false });

type StepThreeProps = {
  handleChangeQueryString: (query: QueryType, term: string) => void;
};

const StepThree = ({ handleChangeQueryString }: StepThreeProps) => {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [expireDate, setExpireDate] = useState<Date>(new Date());
  const { state, dispatch } = useCreateBucket();
  const {
    'day-of-week': dayOfWeek,
    'savings-amount': savingsAmount,
    'target-amount': targetAmount
  } = state;

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      let newValue: string;
      if (name === 'savings-amount') {
        const numericTargetAmount = deleteCommaReturnNumber(targetAmount);
        const numericValue = deleteCommaReturnNumber(value);
        if (numericValue >= numericTargetAmount) {
          newValue = numericTargetAmount.toLocaleString();
        } else {
          newValue = !isNaN(numericValue) ? numericValue.toLocaleString() : '';
        }
        dispatch({ type: 'SET_INPUT_VALUE', payload: { name, value: newValue } });
        return;
      }
      dispatch({ type: 'SET_INPUT_VALUE', payload: { name: name as keyof StateType, value } });
    },
    [dispatch, targetAmount]
  );

  const handleOpenSpendBookBtSheet = () => {
    setOpenBottomSheet(true);
  };

  const handleSelectDoneDayOfWeek = () => {
    if (!dayOfWeek) return;
    handleChangeQueryString('day-of-week', dayOfWeek);
    setOpenBottomSheet(false);
  };

  useEffect(() => {
    if (savingsAmount) {
      const numericTargetAmount = deleteCommaReturnNumber(targetAmount);
      const numericValue = deleteCommaReturnNumber(savingsAmount);
      const { completionDate } = calculateSavingPlan(numericTargetAmount, numericValue, new Date());
      setExpireDate(completionDate);
    }
    handleChangeQueryString('savings-amount', savingsAmount);
  }, [handleChangeQueryString, savingsAmount, targetAmount]);

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
          value={dayOfWeek}
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
          value={savingsAmount}
          inputMode='numeric'
          trailingText='원'
          onChange={handleInputChange}
        />
      </InputCard>
      <FlexBox alignItems='start' justifyContent='center' className=' h-[11.3rem] w-full'>
        {dayOfWeek && savingsAmount.length >= 5 ? (
          <FlexBox
            alignItems='center'
            justifyContent='center'
            className='mt-24 w-full rounded-2xl bg-white p-16'
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
        buttonOptions={{ size: 'md', disabled: dayOfWeek ? false : true }}
        buttonType='button'
        onClick={() => handleSelectDoneDayOfWeek()}
      >
        <div className='mt-0 space-y-[0.8rem]'>
          {dayOfTheWeek.map((item) => {
            return (
              <BottomSheetCard
                key={item}
                item={item}
                onChange={handleInputChange}
                value={dayOfWeek}
                name='day-of-week'
              />
            );
          })}
        </div>
      </BottomSheet>

      <NextButton
        disabled={!(savingsAmount.length > 3 && dayOfWeek)}
        buttonLabel='다음'
        currentStep='3'
        type='button'
        asChild
      />
    </>
  );
};

export default StepThree;

// 바텀시트 내용

type BottomSheetCardProps = {
  item: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

const BottomSheetCard = ({ item, value, onChange, name }: BottomSheetCardProps) => {
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
