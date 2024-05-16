'use client';
import SectionTitle from '@/components/SectionTitle';
import FlexBox from '@/components/ui/FlexBox';
import { Card } from '@/components/ui/card';
import WidgetItem from './home-widget/WidgetItem';
import IsEditWidgetContainer from './home-widget/IsEditWidgetContainer';
import Button, { buttonVariants } from '@/components/ui/Button';
import { useState } from 'react';
import Link from 'next/link';

const widgetData = [
  { title: '이번 달 카드 실적', fiexd: false },
  { title: '매월 나가는 돈', fiexd: false },
  { title: '저번달에 쓴 돈', fiexd: false },
  { title: '거래횟수 Top 3', fiexd: false },
  { title: '나의 포인트', fiexd: false },
  { title: '소비통계', fiexd: false }
];
const HomeWidgetSection = () => {
  const [openEditMode, setOpenEditMode] = useState(false);
  return (
    <>
      <FlexBox justifyContent='between' alignItems='center'>
        <SectionTitle>한 눈에 보기</SectionTitle>
        <Button size='sm' onClick={() => setOpenEditMode(true)} disabled>
          편집
        </Button>
        {/* <Link href='/edit-widget' scroll className={buttonVariants({ size: 'sm' })}>
          편집
        </Link> */}
      </FlexBox>
      <Card className='mb-[1.9rem] h-[17rem]'>맞춤 상품 추천</Card>
      <div className='grid grid-cols-2 gap-x-[2rem] gap-y-[1.9rem]'>
        {widgetData.map((item) => {
          return (
            <WidgetItem key={item.title} title={item.title}>
              aa
            </WidgetItem>
          );
        })}
      </div>

      {openEditMode && (
        <IsEditWidgetContainer setOpenEditMode={setOpenEditMode}>
          <div className='grid grid-cols-2 gap-x-[2rem] gap-y-[1.9rem]'>
            {widgetData.map((item) => {
              return (
                <WidgetItem key={item.title} title={item.title}>
                  aa
                </WidgetItem>
              );
            })}
          </div>
        </IsEditWidgetContainer>
      )}
    </>
  );
};

export default HomeWidgetSection;
