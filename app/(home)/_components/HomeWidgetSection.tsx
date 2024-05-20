import FlexBox from '@/components/ui/FlexBox';
import { Card } from '@/components/ui/card';
import React from 'react';
import Text from '@/components/ui/Text';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';
import { getWidgetItem } from '@/actions/serverAction';

import {
  WidgetBudget,
  WidgetCardPerformance,
  WidgetCurrentMonth,
  WidgetLastMonth,
  WidgetMtCredit,
  WidgetMyChallenge,
  WidgetUpcomingExpenses
} from './widget-item';
export type DataType = {
  showWidget: {
    id: string;
    title: string;
  }[];
  hideWidget: {
    id: string;
    title: string;
  }[];
}[];
const HomeWidgetSection = async () => {
  // const res = await fetch('http://localhost:3000/api/widget');
  const data: DataType = await getWidgetItem();

  const widgetMap: { [key: string]: React.ComponentType } = {
    a: WidgetBudget,
    b: WidgetCardPerformance,
    c: WidgetCurrentMonth,
    d: WidgetLastMonth,
    e: WidgetMtCredit,
    f: WidgetMyChallenge,
    g: WidgetUpcomingExpenses,
    h: WidgetMyChallenge,
    i: WidgetMyChallenge
  };

  return (
    <>
      <FlexBox justifyContent='between' alignItems='center' className='mb-[1.6rem] mt-[4rem]'>
        <Text sizes='18' weight='600' variant='h2'>
          한 눈에 보기
        </Text>
        <Link
          aria-label='위젯 편집으로 이동'
          href='/edit-widget'
          className={buttonVariants({
            size: 'xs',
            className: 'focus:outline-none focus:ring focus:ring-primary/50 focus:ring-offset-1'
          })}
        >
          편집
        </Link>
      </FlexBox>
      <Card className='mb-[1.9rem] h-[17rem]'>맞춤 상품 추천</Card>
      <div className='grid grid-cols-2 gap-x-[2rem] gap-y-[1.9rem]'>
        {data[0].showWidget.map((item) => {
          const WidgetCOmponent = widgetMap[item.id];
          return WidgetCOmponent ? <WidgetCOmponent key={item.id} /> : null;
        })}
      </div>
    </>
  );
};

export default HomeWidgetSection;
