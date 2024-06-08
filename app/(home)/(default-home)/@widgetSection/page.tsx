import React from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import ConsumeWeatherCard from '../_components/ConsumeWeatherCard';
import { getWidgetItem } from '@/service/api/home';
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
  const { orderedMemberWidgets } = await getWidgetItem();

  const widgetMap: Record<string, React.ComponentType> = {
    REMAINING_BUDGET: WidgetBudget,
    UPCOMING_EXPENSES: WidgetUpcomingExpenses,
    LAST_MONTH_EXPENSES: WidgetLastMonth,
    CURRENT_MONTH_EXPENSES: WidgetCurrentMonth,
    CURRENT_MONTH_CARD_USAGE: WidgetCardPerformance,
    MY_CHALLENGE: WidgetMyChallenge,
    CREDIT_SCORE: WidgetMyCredit,
    DAILY_EXPENSES: WidgetSpentEveryMonth
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
        {orderedMemberWidgets.map((item) => {
          const WidgetComponent = widgetMap[item.code];
          return WidgetComponent ? <WidgetComponent key={item.code} /> : null;
        })}
      </div>
    </>
  );
};

export default WidgeSectionPage;
