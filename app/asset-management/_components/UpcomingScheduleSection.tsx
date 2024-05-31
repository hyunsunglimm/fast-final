import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Icon from '@/components/Icon';

const UpcomingScheduleSection = () => {
  return (
    <>
      <SectionTitle>다가오고 있는 일정</SectionTitle>
      {/*  */}
      <Card className='px-24 py-[2.2rem]'>
        <CardHeader>
          <FlexBox justifyContent='between' className='w-full'>
            <Text weight='500' className='text-gray-700'>
              이번 달에 이만큼 나가요
            </Text>
            <Text className='text-gray-500'>5.07 기준</Text>
          </FlexBox>
          <Text weight='700' sizes='20' className='mb-20'>
            300,000원
          </Text>
        </CardHeader>
        <CardContent className='p-0' flexDirection='col'>
          <FixedExpenses />
        </CardContent>
        <CardFooter className='flex w-full items-center justify-center p-0 pt-20'>
          <Button size='sm' className='font-600'>
            내 고정 지출 알아보기
          </Button>
        </CardFooter>
      </Card>
      {/*  */}
      <Card className='my-[2rem] p-[2.4rem]'>
        <CardContent justifyContent='between' alignItems='center' className='w-full p-0'>
          <FlexBox flexDirection='col' className='space-y-2'>
            <FlexBox alignItems='center' className='gap-x-2'>
              <Text weight='500'>이번달 카드값이에요</Text>
              <FlexBox
                justifyContent='center'
                alignItems='center'
                className='h-[1.2rem] w-[1.2rem] rounded-full bg-gray-300 text-10 font-400 text-white'
              >
                ?
              </FlexBox>
            </FlexBox>
            <Text sizes='20' weight='700'>
              150,000원
            </Text>
          </FlexBox>
          <div className='relative h-[5.7rem] w-[6.6rem]'>
            <Image src='/images/asset-page/asset-card.svg' alt='카드 이미지' fill sizes='auto' />
          </div>
        </CardContent>
      </Card>
      {/*  */}
      <UpCommingCard />
    </>
  );
};
export default UpcomingScheduleSection;

const upcommingData = [
  {
    cardName: 'KB국민카드',
    cardType: '체크',
    amount: 135000,
    imgPath: '/images/asset-page/kb-card.webp'
  },
  {
    cardName: '신한카드',
    cardType: '체크',
    amount: 15000,
    imgPath: '/images/asset-page/shinhan-card.webp'
  }
];

const UpCommingCard = () => {
  return (
    <Card className='p-[2.4rem]'>
      <CardHeader className='mb-[2.1rem] p-0'>
        <Text weight='500' sizes='14'>
          카드별 5월 카드값
        </Text>
      </CardHeader>
      <CardContent flexDirection='col' className='w-full gap-y-24 p-0'>
        {upcommingData.map((item) => {
          return (
            <FlexBox
              key={item.cardName}
              justifyContent='between'
              alignItems='center'
              className='w-full'
            >
              <FlexBox flexDirection='row' alignItems='center' className='gap-x-5'>
                <div className='relative h-[6rem] w-[4rem]'>
                  <Image src={item.imgPath} alt={item.cardName} fill sizes='auto' />
                </div>

                <FlexBox flexDirection='col' className='gap-y-10'>
                  <Text sizes='16' weight='700'>
                    {item.cardName}
                  </Text>
                  <Text weight='500'>{item.cardType}</Text>
                </FlexBox>
              </FlexBox>
              <Text sizes='16' weight='500'>
                {item.amount.toLocaleString('ko')} 원
              </Text>
            </FlexBox>
          );
        })}
      </CardContent>
      <CardFooter className='flex items-center justify-center pb-0 pt-24'>
        <Button size='sm' className='font-500'>
          더 알아보기
        </Button>
      </CardFooter>
    </Card>
  );
};
const fiexedExpensesData = [
  { title: '월세', date: '내일', imgPath: '/icons/asset-page/month-rental.svg' },
  { title: '교통비', date: '2일뒤', imgPath: '/icons/asset-page/bus.svg' },
  { title: '구독서비스', date: '4일뒤', imgPath: '/icons/asset-page/subs.svg' }
];
const FixedExpenses = () => {
  return (
    <>
      {fiexedExpensesData.map((item) => {
        return (
          <FlexBox
            key={item.title}
            alignItems='center'
            justifyContent='between'
            className='mb-[2rem] w-full last:mb-0'
          >
            <FlexBox className='gap-x-8' alignItems='center'>
              <Icon
                src={item.imgPath}
                alt={`${item.title} 아이콘`}
                size='24'
                className='rounded-none'
              />
              <Text weight='700' sizes='16'>
                {item.title}
              </Text>
            </FlexBox>
            <Text sizes='16'>{item.date}</Text>
          </FlexBox>
        );
      })}
    </>
  );
};
