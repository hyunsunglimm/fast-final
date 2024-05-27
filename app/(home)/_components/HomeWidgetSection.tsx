import FlexBox from '@/components/ui/FlexBox';
import React from 'react';
import Text from '@/components/ui/Text';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getWidgetItem } from '@/actions/serverAction';
import { UniqueIdentifier } from '@dnd-kit/core';
import ConsumeWeatherCard from './ConsumeWeatherCard';
import HomeAiBannerCard from './HomeAiBannerCard';
import {
  WidgetBudget,
  WidgetCardPerformance,
  WidgetCurrentMonth,
  WidgetLastMonth,
  WidgetMtCredit,
  WidgetMyChallenge,
  WidgetUpcomingExpenses
} from './widget-item';
import { DataType } from '@/types/widget-type/widgetType';

const HomeWidgetSection = async () => {
  // const res = await fetch('https://fast-final-client-kohl.vercel.app//api/widget');
  const data: DataType = await getWidgetItem();

  const widgetMap: { [key: UniqueIdentifier]: React.ComponentType } = {
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
        <Text sizes='20' weight='700' variant='h2'>
          한 눈에 보기
        </Text>
        <Button
          asChild
          styled='outline'
          size='xs'
          className='focus:outline-none focus:ring focus:ring-gray-500/50 focus:ring-offset-1'
        >
          <Link aria-label='위젯 편집으로 이동' href='/edit-widget'>
            편집
          </Link>
        </Button>
      </FlexBox>

      {/* 소비날씨 */}
      <ConsumeWeatherCard />

      {/* 위젯 영역 */}
      <div className='mb-[3rem] grid grid-cols-2 gap-x-20 gap-y-20'>
        {data[0].showWidget.map((item) => {
          const WidgetCOmponent = widgetMap[item.id];
          return WidgetCOmponent ? <WidgetCOmponent key={item.id} /> : null;
        })}
      </div>

      {/* Ai 배너 영역 */}
      <HomeAiBannerCard />
    </>
  );
};

export default HomeWidgetSection;
