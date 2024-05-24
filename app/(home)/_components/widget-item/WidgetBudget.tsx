// 이번 달 남은 예산
import React from 'react';
import { WidgetItemCard } from './WidgetItemCard';
import Text from '@/components/ui/Text';
import type { BudgetDataType } from '@/app/api/widget/budget/route';
import { ProgressBar } from '@/components/ProgressBar';
import { CardContent } from '@/components/ui/card';
const isBudgetData = (data: BudgetDataType): data is Exclude<BudgetDataType, { message: string }> =>
  (data as { message: string }).message === undefined;

export const WidgetBudget = async () => {
  const currentMonth = (new Date().getMonth() + 1).toLocaleString('ko-KR');

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/widget/budget?month=${currentMonth}`
  );
  const data = await res.json();

  return (
    <WidgetItemCard title='이번 달 남은 예산'>
      {isBudgetData(data) && (
        <CardContent flexDirection='col'>
          <Text sizes='20' weight='700'>
            {data.remainingCost.toLocaleString()}원
          </Text>

          <div className='h-[1.2rem] w-full rounded-full bg-gray-300/50'>
            <ProgressBar progressPercent={data.used} barColor='primary' />
          </div>
        </CardContent>
      )}
    </WidgetItemCard>
  );
};
