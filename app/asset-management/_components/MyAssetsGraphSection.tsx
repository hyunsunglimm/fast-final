import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Image from 'next/image';
import MotionCarousel from '@/components/MotionCarousel';
const MyAssetsGraphSection = () => {
  return (
    <>
      <SectionTitle>내 자산은 어떻게</SectionTitle>
      <MotionCarousel>
        <CardList />
        <CardList />
        <CardList />
      </MotionCarousel>
    </>
  );
};
export default MyAssetsGraphSection;

const CardList = () => {
  return (
    <Card className='w-full shrink-0'>
      <CardContent flexDirection='col' className='gap-y-[1.6rem] p-[2.4rem]'>
        <FlexBox flexDirection='col'>
          <Text weight='500' sizes='16' className='text-gray-500'>
            지난달 보다 자산이 증가했어요
          </Text>
          <FlexBox alignItems='center' className='gap-x-1'>
            <Text weight='500' sizes='16'>
              300,000원
            </Text>
            <div className='relative h-[1.6rem] w-[1.6rem]'>
              <Image
                src='/images/arrow/bxs-up-arrow.svg'
                alt='자산 증가 아이콘'
                fill
                sizes='auto'
              />
            </div>
          </FlexBox>
        </FlexBox>
        <div className='h-[11.4rem] w-full bg-orange-500 px-[0.8rem]'>graph</div>
      </CardContent>
    </Card>
  );
};
