import FlexBox from '@/components/ui/FlexBox';
import { Card } from '@/components/ui/card';
import React from 'react';
import Text from '@/components/ui/Text';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';
import { getWidgetItem } from '@/actions/serverAction';
import Image from 'next/image';

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
      <Card className='relative mb-[1.9rem] flex h-[17rem] justify-between overflow-hidden bg-[#886AFF] p-24'>
        <FlexBox flexDirection='col' className='gap-y-10 text-white'>
          <div className='rounded-full bg-black/20 px-[0.8rem] py-[0.5rem]'>
            <Text sizes='12' weight='700'>
              AI맞춤 추천
            </Text>
          </div>
          <Text sizes='20' weight='700'>
            꼭 맞는 상품 <br />
            여기 있어요!
          </Text>
        </FlexBox>
        <div className='absolute right-[2.4rem] top-[0.5rem] h-[18rem] w-[13rem]'>
          <Image
            src='/images/ai-banner-porko.svg'
            alt='AI 맞춤 추천 이미지'
            fill
            sizes='auto'
            className='object-top'
          />
        </div>
      </Card>
      <div className='grid grid-cols-2 gap-x-20 gap-y-20'>
        {data[0].showWidget.map((item) => {
          const WidgetCOmponent = widgetMap[item.id];
          return WidgetCOmponent ? <WidgetCOmponent key={item.id} /> : null;
        })}
      </div>
    </>
  );
};

export default HomeWidgetSection;
