// 이번 달 남은 예산
import React from 'react';
import { WidgetItemCard } from './_components/WidgetItemCard';
import type { BudgetDataType } from '@/app/api/widget/budget/route';
import { ProgressBar } from '@/components/ProgressBar';
import { CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';

const isBudgetData = (data: BudgetDataType): data is Exclude<BudgetDataType, { message: string }> =>
  (data as { message: string }).message === undefined;

export const WidgetBudget = async () => {
  const currentMonth = (new Date().getMonth() + 1).toLocaleString('ko-KR');

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/widget/budget?month=${currentMonth}`
  );
  const data = await res.json();

  return (
    <WidgetItemCard title='이번 달 남은 예산' subText={`${data.remainingCost.toLocaleString()}원`}>
      {isBudgetData(data) && (
        <CardContent flexDirection='col' justifyContent='between'>
          <FlexBox alignItems='end' justifyContent='between' className='mb-8 mt-10 w-full'>
            <Icon
              src='/icons/categories/non-background/money-purse.svg'
              alt='돈 주머니 아이콘'
              size='34'
              className='rounded-none'
            />
            <Text className='text-gray-700'> 75%</Text>
          </FlexBox>
          <div className='h-[1.5rem] w-full rounded-full bg-gray-300/50'>
            <ProgressBar progressPercent={data.used} barColor='primary' />
          </div>
        </CardContent>
      )}
    </WidgetItemCard>
  );
};
