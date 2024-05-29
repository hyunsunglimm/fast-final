import React, { useState, useEffect } from 'react';
import InputCard from '../InputCard';
import Input from '@/components/ui/Input';
import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import { useSearchParams } from 'next/navigation';
import BottomSheet from '@/components/BottomSheet';
import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';
import { cn } from '@/utils/twMerge';
import { QueryType } from '../BucketStepForm';
type StepTwoProps = {
  handleChangeQueryString: (query: QueryType, term: string) => void;
};
export const StepTwo = ({ handleChangeQueryString }: StepTwoProps) => {
  const searchParams = useSearchParams();
  const [openSpendSheet, setOpenSpendSheet] = useState(false);
  const [openSavingSheet, setOpenSavingSheet] = useState(false);
  const [spendBook, setSpendBook] = useState<string | null>(null);
  const [savingBook, setSavingBook] = useState<string | null>(null);

  const handleOpenSpendBookBtSheet = () => {
    setOpenSpendSheet(true);
  };
  const handleOpenSavingBookBtSheet = () => {
    setOpenSavingSheet(true);
  };

  const isSelectSpendBook = () => {
    if (!spendBook) return;
    handleChangeQueryString('spend-book', spendBook);
    setOpenSpendSheet(false);
  };

  const isSelectSavingBoook = () => {
    if (!savingBook) return;
    handleChangeQueryString('saving-book', savingBook);
    setOpenSavingSheet(false);
  };

  return (
    <>
      <InputCard>
        <Input
          className='z-10 cursor-pointer caret-transparent'
          placeholder='출금통장을 선택해주세요'
          id='spend-book'
          border='nonborder'
          onFocus={handleOpenSpendBookBtSheet}
          defaultValue={searchParams.get('spend-book'?.toString()) || ''}
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
          className='z-10 cursor-pointer caret-transparent'
          placeholder='저축통장을 선택해주세요'
          id='saving-book'
          border='nonborder'
          onFocus={handleOpenSavingBookBtSheet}
          defaultValue={searchParams.get('saving-book'?.toString()) || ''}
        />
        <Icon
          src='/icons/system-icon/arrow/arrow-down.svg'
          alt='아래 화살표 아이콘'
          size='20'
          className='absolute right-[2rem]'
        />
      </InputCard>
      <FlexBox
        alignItems='end'
        justifyContent='center'
        className='mt-32 h-[11.3rem] w-full'
      ></FlexBox>
      <BottomSheet
        title='출금통장'
        buttonLabel='선택'
        isOpen={openSpendSheet}
        onClose={() => setOpenSpendSheet(false)}
        buttonOptions={{ size: 'md', disabled: spendBook ? false : true }}
        buttonType='button'
        onClick={() => isSelectSpendBook()}
      >
        <div className='mt-0 space-y-[0.8rem]'>
          {[...Array(16)].map((item, idx) => (
            <SpendBookCard key={idx} id={idx} setSpendBook={setSpendBook} />
          ))}
        </div>
      </BottomSheet>
      <BottomSheet
        title='저축통장'
        buttonLabel='선택'
        isOpen={openSavingSheet}
        onClose={() => setOpenSavingSheet(false)}
        buttonOptions={{ size: 'md', disabled: savingBook ? false : true }}
        buttonType='button'
        onClick={() => isSelectSavingBoook()}
      >
        <div className='mt-0 space-y-[0.8rem]'>
          {[...Array(16)].map((item, idx) => (
            <SavingBookCard key={idx} id={idx} setSavingBook={setSavingBook} />
          ))}
        </div>
      </BottomSheet>
    </>
  );
};

const SpendBookCard = ({
  id,
  setSpendBook
}: {
  id: number;
  setSpendBook: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <>
      <label
        htmlFor={`${id}`}
        className={cn(
          flexBoxVariants({
            className:
              'cursor-pointer gap-12 rounded-full bg-gray-100 px-20 py-16  has-[:checked]:bg-select',

            alignItems: 'center'
          })
        )}
      >
        <input
          type='radio'
          className='hidden'
          aria-hidden
          name='spendbook'
          id={`${id}`}
          onChange={(e) => setSpendBook(e.currentTarget.id)}
        />
        <Icon src='/icons/logos/bank/bank-toss.svg' alt='아이콘' size='32' />
        <FlexBox flexDirection='col'>
          <Text sizes='12'>카카오뱅크</Text>
          <Text sizes='16' weight='500'>
            200,000원
          </Text>
        </FlexBox>
      </label>
    </>
  );
};

const SavingBookCard = ({
  id,
  setSavingBook
}: {
  id: number;
  setSavingBook: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <label
      htmlFor={`${id}`}
      className={cn(
        flexBoxVariants({
          className:
            'cursor-pointer gap-12 rounded-full bg-gray-100 px-20 py-16  has-[:checked]:bg-select',

          alignItems: 'center'
        })
      )}
    >
      <input
        type='radio'
        className='hidden'
        aria-hidden
        name='spendbook'
        id={`${id}`}
        onChange={(e) => setSavingBook(e.currentTarget.id)}
      />
      <Icon src='/icons/logos/bank/bank-toss.svg' alt='아이콘' size='32' />
      <FlexBox flexDirection='col'>
        <Text sizes='12'>카카오뱅크</Text>
        <Text sizes='16' weight='500'>
          200,000원
        </Text>
      </FlexBox>
    </label>
  );
};
