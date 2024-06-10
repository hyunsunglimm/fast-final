import dynamic from 'next/dynamic';
import React, { ChangeEvent, useCallback, useState } from 'react';
import InputCard from '../InputCard';
import Input from '@/components/ui/Input';
import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';
import NextButton from '../NextButton';
import RoundedSkeleton from '../RoundedSkeleton';
import { useQueries, UseQueryResult } from '@tanstack/react-query';
import { cn } from '@/shared/utils/twMerge';
import { QueryType } from '../BucketStepForm';
import { spendBookQueryFn, savingBookQueryFn } from '@/service/api/create-bucket';
import { useCreateBucket } from '../../hooks/useCreateBucket';
import type { StateType } from '../../types';

const BottomSheet = dynamic(() => import('@/components/BottomSheet'), { ssr: false });
type BankDataType = {
  bank: string;
  amount: number;
  imgSrc: string;
}[];
type StepTwoProps = {
  handleChangeQueryString: (query: QueryType, term: string) => void;
};

const StepTwo = ({ handleChangeQueryString }: StepTwoProps) => {
  const [openSpendSheet, setOpenSpendSheet] = useState(false);
  const [openSavingSheet, setOpenSavingSheet] = useState(false);
  const { state, dispatch } = useCreateBucket();
  const { 'spend-book': spendBook, 'saving-book': savingBook } = state;
  const queryResults = useQueries({
    queries: [
      {
        queryKey: ['spend-book'],
        queryFn: spendBookQueryFn
      },
      {
        queryKey: ['saving-book'],
        queryFn: savingBookQueryFn
      }
    ]
  });
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      dispatch({
        type: 'SET_INPUT_VALUE',
        payload: { name: name as keyof StateType, value }
      });
    },
    [dispatch]
  );
  const [spendBookResult, savingBookResult] = queryResults as UseQueryResult<BankDataType, Error>[];

  const handleOpenSpendBookBtSheet = () => {
    setOpenSpendSheet(true);
  };
  const handleOpenSavingBookBtSheet = () => {
    setOpenSavingSheet(true);
  };

  const handleSelectDoneSpendBook = () => {
    if (!spendBook) return;
    handleChangeQueryString('spend-book', spendBook);
    setOpenSpendSheet(false);
  };

  const handleSelectDoneSavingBoook = () => {
    if (!savingBook) return;
    handleChangeQueryString('saving-book', savingBook);
    setOpenSavingSheet(false);
  };

  return (
    <>
      <InputCard>
        <Input
          readOnly
          className='peer/spend z-10 cursor-pointer caret-transparent'
          placeholder='주거래 계좌를 선택해주세요'
          id='spend-book'
          border='nonborder'
          onFocus={handleOpenSpendBookBtSheet}
          value={spendBook}
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
          readOnly
          isTranslate
          className='z-10 cursor-pointer caret-transparent'
          placeholder='저축할 계좌를 선택해주세요'
          id='saving-book'
          border='nonborder'
          onFocus={handleOpenSavingBookBtSheet}
          value={savingBook}
          inputMode='none'
        />
        <Icon
          src='/icons/system-icon/arrow/arrow-down.svg'
          alt='아래 화살표 아이콘'
          size='20'
          className='absolute right-[2rem]'
        />
      </InputCard>
      <FlexBox alignItems='start' justifyContent='center' className=' h-[11.3rem] w-full'>
        {spendBook && savingBook ? (
          <FlexBox
            alignItems='center'
            justifyContent='center'
            className='mt-24 w-full rounded-2xl bg-white p-16'
          >
            <Text weight='500'>
              <span className='text-primary'>{spendBook}</span>에서{' '}
              <span className='text-primary'>{savingBook}</span>으로 저축할거에요
            </Text>
          </FlexBox>
        ) : null}
      </FlexBox>

      {/* 출금 통장 바텀 시트 */}
      <BottomSheet
        title='출금통장'
        buttonLabel='선택'
        isOpen={openSpendSheet}
        onClose={() => setOpenSpendSheet(false)}
        buttonOptions={{ size: 'md', disabled: spendBook ? false : true }}
        buttonType='button'
        onClick={() => handleSelectDoneSpendBook()}
      >
        <div className='mt-0 space-y-[0.8rem]'>
          {spendBookResult.isLoading
            ? [...Array(6)].map((_, index) => <RoundedSkeleton key={index} />)
            : spendBookResult.data?.map((item) => {
                return (
                  <BottomSheetCard
                    key={item.bank}
                    item={item}
                    onChange={handleInputChange}
                    value={spendBook}
                    name='spend-book'
                  />
                );
              })}
        </div>
      </BottomSheet>

      {/* 저축 통장 바텀 시트 */}
      <BottomSheet
        title='저축통장'
        buttonLabel='선택'
        isOpen={openSavingSheet}
        onClose={() => setOpenSavingSheet(false)}
        buttonOptions={{ size: 'md', disabled: savingBook ? false : true }}
        buttonType='button'
        onClick={() => handleSelectDoneSavingBoook()}
      >
        <div className='mt-0 space-y-[0.8rem]'>
          {savingBookResult.isFetching
            ? [...Array(6)].map((_, index) => <RoundedSkeleton key={index} />)
            : savingBookResult.data?.map((item) => {
                return (
                  <BottomSheetCard
                    key={item.bank}
                    item={item}
                    value={savingBook}
                    onChange={handleInputChange}
                    name='saving-book'
                  />
                );
              })}
        </div>
      </BottomSheet>
      <NextButton
        disabled={!(savingBook && spendBook)}
        buttonLabel='다음'
        currentStep='2'
        type='button'
        asChild
      />
    </>
  );
};
export default StepTwo;

// 바텀시트 내용

type ItemType = {
  bank: string;
  amount: number;
  imgSrc: string;
};

type BottomSheetCard = {
  item: ItemType;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

const BottomSheetCard = ({ item, value, onChange, name }: BottomSheetCard) => {
  const { bank, amount, imgSrc } = item;
  return (
    <>
      <label
        htmlFor={bank}
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
          id={bank}
          value={bank}
          defaultChecked={bank === value}
          onChange={onChange}
        />
        <Icon src={imgSrc} alt='아이콘' size='32' />
        <FlexBox flexDirection='col'>
          <Text sizes='12'>{bank} </Text>
          <Text sizes='16' weight='500'>
            {amount.toLocaleString()}원
          </Text>
        </FlexBox>
      </label>
    </>
  );
};
