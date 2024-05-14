import React from 'react';
import SectionTitle from './SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import { ArrowUpFillIcon } from '@/components/icons';

const MyAssetsGraphSection = () => {
  return (
    <>
      <SectionTitle>내 자산은 어떻게</SectionTitle>
      <Card>
        <CardContent flexDirection='col' className='gap-y-[1.6rem] p-[2.4rem]'>
          <FlexBox flexDirection='col'>
            <Text weight='500' sizes='16' className='text-gray-500'>
              지난달 보다 자산이 증가했어요
            </Text>
            <FlexBox alignItems='center' className='gap-x-1'>
              <Text weight='500' sizes='16'>
                300,000원
              </Text>
              <ArrowUpFillIcon />
            </FlexBox>
          </FlexBox>
          <div className='h-[11.4rem] w-full bg-orange-500 px-[0.8rem]'>graph</div>
        </CardContent>
      </Card>
      <FlexBox alignItems='center' justifyContent='center' className='my-[1.6rem] w-full'>
        <span className='me-3 flex h-[0.8rem] w-[1.8rem] rounded-full bg-black'></span>
        <span className='me-3 flex h-[0.8rem] w-[0.8rem] rounded-full bg-gray-300'></span>
        <span className='me-3 flex h-[0.8rem] w-[0.8rem] rounded-full bg-gray-300'></span>
      </FlexBox>
    </>
  );
};
export default MyAssetsGraphSection;
