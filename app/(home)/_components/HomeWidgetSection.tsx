'use client';
import SectionTitle from '@/components/SectionTitle';
import FlexBox from '@/components/ui/FlexBox';
import { Card } from '@/components/ui/card';
import WidgetItem from './home-widget/WidgetItem';
import IsEditWidgetItem from './home-widget/IsEditWidgetItem';
import IsEditWidgetContainer from './home-widget/IsEditWidgetContainer';
import Button from '@/components/ui/Button';
import React, { useState } from 'react';
import Text from '@/components/ui/Text';
import { ArrowBackIcon } from '@/components/icons';
import PlusIcon from '@/components/icons/PlusIcon';

const widgetData = [
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
  const [openEditMode, setOpenEditMode] = useState(false);
  return (
    <>
      <FlexBox justifyContent='between' alignItems='center'>
        <SectionTitle>한 눈에 보기</SectionTitle>
        <Button size='sm' onClick={() => setOpenEditMode((prev) => !prev)}>
          편집
        </Button>
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

      <IsEditWidgetContainer openEditMode={openEditMode}>
        <FlexBox alignItems='center' justifyContent='between' className='h-[5.6rem] px-[2rem]'>
          <div className='w-[2.4rem] cursor-pointer' onClick={() => setOpenEditMode(false)}>
            <ArrowBackIcon />
          </div>
          <FlexBox justifyContent='center'>
            <Text variant='h6' sizes='16'>
              한 눈에 보기 편집
            </Text>
          </FlexBox>
          <div className='w-[2.4rem]'></div>
        </FlexBox>
        <div className='px-[2rem]'>
          <Text className='mb-20 block'>
            내가 보고 싶은 내용을 6개의 메뉴로 선택할 수 있어요 <br />
            아이콘을 길게 눌러서 순서를 변경할 수 있어요.
          </Text>
          <Card className='mb-[1.9rem] h-[17rem]'>맞춤 상품 추천</Card>
        </div>
        <div className='grid grid-cols-2 gap-x-[2rem] gap-y-[1.9rem] px-[2rem]'>
          {widgetData.map((item) => {
            return (
              <React.Fragment key={item.title}>
                {item.fiexd && (
                  <IsEditWidgetItem key={item.title} title={item.title}>
                    {item.title}
                  </IsEditWidgetItem>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className='mt-20 bg-white p-[2rem]'>
          <div className='mb-20'>
            <Text sizes='20' weight='700'>
              숨긴 항목
            </Text>
          </div>
          <FlexBox flexDirection='col' className='gap-y-[2rem] '>
            {widgetData.map((item) => {
              return (
                <React.Fragment key={item.title}>
                  {!item.fiexd && (
                    <FlexBox justifyContent='between' className='w-full'>
                      <Text sizes='18' weight='500' className='text-gray-700'>
                        {item.title}
                      </Text>
                      <PlusIcon />
                    </FlexBox>
                  )}
                </React.Fragment>
              );
            })}
          </FlexBox>
        </div>
      </IsEditWidgetContainer>
    </>
  );
};

export default HomeWidgetSection;
