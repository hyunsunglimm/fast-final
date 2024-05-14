import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
import {
  KbCardIcon,
  ShinaHanCardIcon,
  CreditCardIcon,
  MonthlyRentIcon,
  BusIcon,
  SubsServiceIcon
} from '@/components/icons';

const UpcomingScheduleSection = () => {
  return (
    <>
      <SectionTitle>다가오고 있는 일정</SectionTitle>
      {/*  */}
      <Card className='px-[2.4rem] py-[2.2rem]'>
        <CardContent className='p-0' flexDirection='col'>
          <FlexBox justifyContent='between' className='w-full'>
            <Text weight='500' className='text-gray-700'>
              이번 달에 이만큼 나가요
            </Text>
            <Text className='text-gray-500'>5.07 기준</Text>
          </FlexBox>
          <Text weight='700' sizes='20' className='mb-[2rem]'>
            300,000원
          </Text>
          <FixedExpenses />
        </CardContent>
        <CardFooter className='p-0 pt-[2.0rem]'>
          <Button>내 고정 지출 알아보기</Button>
        </CardFooter>
      </Card>
      {/*  */}
      <Card className='my-[2rem] p-[2.4rem]'>
        <CardContent justifyContent='between' alignItems='center' className='w-full p-0'>
          <FlexBox flexDirection='col'>
            <Text>이번달 카드값이에요</Text>
            <Text sizes='20' weight='700'>
              150,000원
            </Text>
          </FlexBox>
          <CreditCardIcon />
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
    icon: <KbCardIcon />
  },
  {
    cardName: '신한카드',
    cardType: '체크',
    amount: 15000,
    icon: <ShinaHanCardIcon />
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
      <CardContent flexDirection='col' className='w-full gap-y-[2.5rem] p-0'>
        {upcommingData.map((item) => {
          return (
            <FlexBox
              key={item.cardName}
              justifyContent='between'
              alignItems='center'
              className='w-full'
            >
              <FlexBox flexDirection='row' alignItems='center' className='gap-x-5'>
                {item.icon}
                <FlexBox flexDirection='col'>
                  <Text weight='700' sizes='16'>
                    {item.cardName}
                  </Text>
                  <Text>{item.cardType}</Text>
                </FlexBox>
              </FlexBox>
              <Text sizes='16' weight='500'>
                {item.amount.toLocaleString('kr')} 원
              </Text>
            </FlexBox>
          );
        })}
      </CardContent>
      <CardFooter className='pb-0 pt-[2.5rem]'>
        <Button>더 알아보기</Button>
      </CardFooter>
    </Card>
  );
};
const fiexedExpensesData = [
  { title: '월세', date: '내일', icon: <MonthlyRentIcon /> },
  { title: '교통비', date: '2일뒤', icon: <BusIcon /> },
  { title: '구독서비스', date: '4일뒤', icon: <SubsServiceIcon /> }
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
            <FlexBox className='gap-x-[0.5rem]' alignItems='center'>
              <FlexBox
                alignItems='center'
                justifyContent='center'
                className='mx-auto my-auto h-[3rem] w-[3rem]'
              >
                {item.icon}
              </FlexBox>
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
