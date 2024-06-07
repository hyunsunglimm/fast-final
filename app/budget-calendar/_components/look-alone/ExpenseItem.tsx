import React, { MouseEvent } from 'react';
import { HistoryListType } from '@/shared/types/response/calendarHistroy';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import TextButton from '@/components/ui/TextButton';

const categoryImgConfig: Record<number, string> = {
  1: '/icons/categories/background/categories-1.svg',
  2: '/icons/categories/background/categories-2.svg',
  3: '/icons/categories/background/categories-3.svg',
  4: '/icons/categories/background/categories-4.svg',
  5: '/icons/categories/background/categories-5.svg',
  6: '/icons/categories/background/categories-6.svg',
  7: '/icons/categories/background/categories-7.svg',
  8: '/icons/categories/background/categories-8.svg',
  9: '/icons/categories/background/categories-9.svg',
  10: '/icons/categories/background/categories-10.svg',
  11: '/icons/categories/background/categories-11.svg',
  12: '/icons/categories/background/categories-12.svg',
  13: '/icons/categories/background/categories-13.svg',
  14: '/icons/categories/background/categories-14.svg'
};

type ExpenseItemProps = {
  data: HistoryListType;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const ExpenseItem = ({ data, onClick }: ExpenseItemProps) => {
  const { id, cost, payType, place, isRegret, historyCategoryId } = data;

  const regretImgSrc = isRegret
    ? '/icons/categories/background/categories-regret.svg'
    : '/icons/weather/consumption/weather-none.svg';

  const categoryImgSrc = categoryImgConfig[historyCategoryId.imageUrlTypeNo];

  return (
    <li className='mt-24 flex items-center justify-between gap-[1.6rem]'>
      <Icon src={categoryImgSrc} alt={place} size='40' className='shrink-0' />
      <div className='w-full'>
        <TextButton
          id={String(id)}
          onClick={onClick}
          className='mb-4 text-16 font-700'
          aria-label='소비 상세 내역 열기'
        >
          {cost > 0 && '+'}
          {cost.toLocaleString()} 원
        </TextButton>
        <div className='flex gap-[0.2rem] text-12 text-gray-500'>
          <span>{place}</span>
          <span>|</span>
          <span>{payType}</span>
        </div>
      </div>
      <div className='shrink-0'>
        <FlexBox role='button' flexDirection='col' className='min-w-[5rem]' alignItems='center'>
          <Icon src={regretImgSrc} alt='후회' className='m-auto mb-6 block' size='28' />
          {isRegret && <p className='text-12 text-active'>후회 소비</p>}
        </FlexBox>
      </div>
    </li>
  );
};

export default ExpenseItem;
