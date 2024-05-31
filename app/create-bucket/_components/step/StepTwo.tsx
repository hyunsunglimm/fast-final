import React, { ChangeEvent, useCallback, useState } from 'react';
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
import { spendBookData, savingBookData } from '../../data';

type StepTwoProps = {
  handleChangeQueryString: (query: QueryType, term: string) => void;
};
export const StepTwo = ({ handleChangeQueryString }: StepTwoProps) => {
  const searchParams = useSearchParams();
  const [openSpendSheet, setOpenSpendSheet] = useState(false);
  const [openSavingSheet, setOpenSavingSheet] = useState(false);
  const [inputValues, setInputValues] = useState({
    'spend-book': searchParams.get('spend-book') || '',
    'saving-book': searchParams.get('saving-book') || ''
  });

  const handleChangeInputValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleOpenSpendBookBtSheet = () => {
    setOpenSpendSheet(true);
  };
  const handleOpenSavingBookBtSheet = () => {
    setOpenSavingSheet(true);
  };

  const handleSelectDoneSpendBook = () => {
    if (!inputValues['spend-book']) return;
    handleChangeQueryString('spend-book', inputValues['spend-book']);
    setOpenSpendSheet(false);
  };

  const handleSelectDoneSavingBoook = () => {
    if (!inputValues['saving-book']) return;
    handleChangeQueryString('saving-book', inputValues['saving-book']);
    setOpenSavingSheet(false);
  };

  return (
    <>
      <InputCard>
        <Input
          readOnly
          className='peer/spend z-10 cursor-pointer caret-transparent'
          placeholder='출금통장을 선택해주세요'
          id='spend-book'
          border='nonborder'
          onFocus={handleOpenSpendBookBtSheet}
          value={inputValues['spend-book']}
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
          placeholder='저축통장을 선택해주세요'
          id='saving-book'
          border='nonborder'
          onFocus={handleOpenSavingBookBtSheet}
          value={inputValues['saving-book']}
          inputMode='none'
        />
        <Icon
          src='/icons/system-icon/arrow/arrow-down.svg'
          alt='아래 화살표 아이콘'
          size='20'
          className='absolute right-[2rem]'
        />
      </InputCard>
      <FlexBox alignItems='start' justifyContent='center' className='mt-32 h-[11.3rem] w-full'>
        {inputValues['spend-book'] && inputValues['saving-book'] ? (
          <FlexBox
            alignItems='center'
            justifyContent='center'
            className='w-full rounded-2xl bg-white p-16'
          >
            <Text weight='500'>
              <span className='text-primary'>{inputValues['spend-book']}</span>에서{' '}
              <span className='text-primary'>{inputValues['saving-book']}</span>으로 저축할거에요
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
        buttonOptions={{ size: 'md', disabled: inputValues['spend-book'] ? false : true }}
        buttonType='button'
        onClick={() => handleSelectDoneSpendBook()}
      >
        <div className='mt-0 space-y-[0.8rem]'>
          {spendBookData.map((item) => {
            return (
              <BottomSheetCard
                key={item.bank}
                item={item}
                onChange={handleChangeInputValues}
                value={inputValues['spend-book']}
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
        buttonOptions={{ size: 'md', disabled: inputValues['saving-book'] ? false : true }}
        buttonType='button'
        onClick={() => handleSelectDoneSavingBoook()}
      >
        <div className='mt-0 space-y-[0.8rem]'>
          {savingBookData.map((item) => {
            return (
              <BottomSheetCard
                key={item.bank}
                item={item}
                value={inputValues['saving-book']}
                onChange={handleChangeInputValues}
                name='saving-book'
              />
            );
          })}
        </div>
      </BottomSheet>
      <NextButton
        disabled={!(inputValues['saving-book'] && inputValues['spend-book'])}
        buttonLabel='다음'
        currentStep='2'
        type='button'
        asChild
      />
    </>
  );
};

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
