/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import InputCard from '../InputCard';
import Input from '@/components/ui/Input';
import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import BottomSheet from '@/components/BottomSheet';
import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';
import { cn } from '@/utils/twMerge';
import { QueryType } from '../BucketStepForm';
import NextButton from '../NextButton';
import { myProductData } from '../../data';
import Checkbox from '@/components/ui/CheckBox';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { getSkipHref } from '../../util';

type StepFourProps = {
  handleChangeQueryString: (query: QueryType, term: string) => void;
};

export const StepFour = ({ handleChangeQueryString }: StepFourProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const skipUrl = getSkipHref(searchParams);
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [allCheck, setAllCheck] = useState(false);
  const [checkItems, setCheckItems] = useState<string[]>(
    decodeURIComponent(searchParams.get('my-saving-product') || '')
      .split('|')
      .filter((item) => item.trim() !== '')
  );

  const handleChangeInputValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckItems((prev) => [...prev, value]);
    } else {
      setCheckItems((prev) => prev.filter((item) => item !== value));
    }
  }, []);

  const handleOpenSpendBookBtSheet = () => {
    setOpenBottomSheet(true);
  };

  const handleSelectDoneDayOfWeek = () => {
    const queryString = encodeURIComponent(checkItems.map((item) => item).join('|'));
    handleChangeQueryString('my-saving-product', queryString);
    setOpenBottomSheet(false);
  };

  const handleCheckAll = (e: ChangeEvent<HTMLInputElement>) => {
    setAllCheck((prev) => !prev);
    const { checked } = e.target;
    if (checked) {
      setCheckItems(myProductData.map((item) => item.productName));
    } else {
      setCheckItems([]);
    }
  };

  useEffect(() => {
    if (checkItems.length === myProductData.length) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [checkItems]);

  return (
    <>
      <InputCard>
        <Input
          readOnly
          className='peer/spend z-10 cursor-pointer caret-transparent'
          placeholder='저축 상품을 연결하세요'
          id='my-saving-product'
          border='nonborder'
          onFocus={handleOpenSpendBookBtSheet}
          value={checkItems.length > 0 ? `상품 ${checkItems.length}개 선택함` : ''}
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

      <FlexBox alignItems='end' justifyContent='center' className='mt-32 h-[19.7rem] w-full'>
        <Link href={`${pathname}/result${skipUrl}`} aria-label='저축 상품 연결 건너뛰기'>
          <Text sizes='16' weight='500' className='underline'>
            건너뛰기
          </Text>
        </Link>
      </FlexBox>

      {/* 요일 선택 바텀 시트 */}
      <BottomSheet
        title='상품선택'
        buttonLabel='선택'
        isOpen={openBottomSheet}
        onClose={() => setOpenBottomSheet(false)}
        buttonOptions={{ size: 'md' }}
        buttonType='button'
        onClick={() => handleSelectDoneDayOfWeek()}
      >
        <div className='mt-0 space-y-[0.8rem]'>
          <Checkbox
            onChange={handleCheckAll}
            checked={allCheck}
            id='product-all-check'
            sizes='20'
            childrenPosition='left'
            className='mb-20 cursor-pointer justify-between rounded-3xl bg-gray-100 px-20 py-16 has-[:checked]:border-primary/10 has-[:checked]:bg-primary/20'
          >
            <Text sizes='16' weight='700'>
              보유 적금 상품 <span className='ml-2 text-primary'>{myProductData.length}</span>
            </Text>
          </Checkbox>

          {myProductData.map((item) => {
            return (
              <BottomSheetCard
                key={item.productName}
                item={item}
                onChange={handleChangeInputValues}
                name='my-saving-product'
                checkItems={checkItems}
              />
            );
          })}
        </div>
      </BottomSheet>

      <NextButton buttonLabel='시작하기' currentStep='4' type='button' asChild />
    </>
  );
};

// 바텀시트 내용
type ItemType = (typeof myProductData)[0];
type BottomSheetCard = {
  item: ItemType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  checkItems: string[];
};

const BottomSheetCard = ({ item, onChange, name, checkItems }: BottomSheetCard) => {
  const { productName, amount, imgSrc } = item;
  return (
    <>
      <label
        htmlFor={productName}
        className={cn(
          flexBoxVariants({
            className:
              'cursor-pointer gap-12 rounded-full bg-gray-100 px-20 py-16 has-[:checked]:bg-select',
            alignItems: 'center'
          })
        )}
      >
        <input
          type='checkbox'
          className='hidden'
          aria-hidden
          name={name}
          id={productName}
          value={productName}
          checked={checkItems.includes(productName)}
          onChange={onChange}
        />
        <Icon src={imgSrc} alt='아이콘' size='32' />
        <FlexBox flexDirection='col'>
          <Text sizes='12'>{productName} </Text>
          <Text sizes='16' weight='500'>
            {amount.toLocaleString()}원
          </Text>
        </FlexBox>
      </label>
    </>
  );
};
