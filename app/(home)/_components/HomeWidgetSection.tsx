import FlexBox from '@/components/ui/FlexBox';
import { Card } from '@/components/ui/card';
import WidgetItem from './WidgetItem';
import React from 'react';
import Text from '@/components/ui/Text';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/Button';

export const widgetData = [
  { title: '이번달 남은 예산', fiexd: true },
  { title: '다가오는 지출', fiexd: true },
  { title: '저번달에 쓴 돈', fiexd: true },
  { title: '?월 현재 소비', fiexd: true },
  { title: '이번달 카드실적', fiexd: true },
  { title: '나의 신용점수', fiexd: true },
  { title: '매월 나가는 돈', fiexd: false },
  { title: '나의 챌린지', fiexd: false },
  { title: '투자 랭킹', fiexd: false },
  { title: '나의 걸음 수', fiexd: false },
  { title: '오늘의 운세', fiexd: false }
];

const HomeWidgetSection = () => {
  return (
    <>
      <FlexBox justifyContent='between' alignItems='center' className='mb-[1.6rem] mt-[4rem]'>
        <Text sizes='18' weight='600' variant='h2'>
          한 눈에 보기
        </Text>
        <Link scroll={false} href='/edit-widget' className={buttonVariants({ size: 'xs' })}>
          편집
        </Link>
      </FlexBox>
      <Card className='mb-[1.9rem] h-[17rem]'>맞춤 상품 추천</Card>
      <div className='grid grid-cols-2 gap-x-[2rem] gap-y-[1.9rem]'>
        {widgetData.map((item) => {
          return (
            <React.Fragment key={item.title}>
              {item.fiexd && <WidgetItem title={item.title}>aa</WidgetItem>}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default HomeWidgetSection;
