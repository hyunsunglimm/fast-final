import React from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import ConsumeWeatherCard from '../_components/ConsumeWeatherCard';
import { getWidgetItem } from '@/service/api/home';
import { UniqueIdentifier } from '@dnd-kit/core/dist/types';
import {
  WidgetBudget,
  WidgetCardPerformance,
  WidgetCurrentMonth,
  WidgetLastMonth,
  WidgetMyCredit,
  WidgetMyChallenge,
  WidgetUpcomingExpenses,
  WidgetSpentEveryMonth
} from './_components';
import { currentUserSession } from '@/shared/actions/auth';

const WidgeSectionPage = async () => {
  const session = await currentUserSession();
  if (!session) {
    return null;
  }
  const { elements } = await getWidgetItem();

  const widgetMap: { [key: UniqueIdentifier]: React.ComponentType } = {
    1: WidgetBudget,
    2: WidgetUpcomingExpenses,
    3: WidgetLastMonth,
    4: WidgetCurrentMonth,
    5: WidgetCardPerformance,
    6: WidgetMyChallenge,
    7: WidgetMyCredit,
    8: WidgetSpentEveryMonth
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
          <Link aria-label='위젯 편집으로 이동' href='/edit-widget' scroll={false}>
            편집
          </Link>
        </Button>
      </FlexBox>

      {/* 소비날씨 */}
      <ConsumeWeatherCard />

      {/* 위젯 영역 */}
      <div className='grid grid-cols-2 justify-items-center gap-[1.6rem]'>
        {elements.map((item) => {
          const WidgetComponent = widgetMap[item.sequence];
          return WidgetComponent ? <WidgetComponent key={item.id} /> : null;
        })}
      </div>
    </>
  );
};

export default WidgeSectionPage;
