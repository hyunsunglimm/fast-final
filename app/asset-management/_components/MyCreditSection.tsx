import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
const MyCreditSection = () => {
  return (
    <>
      <SectionTitle>내 신용 점수</SectionTitle>
      <Card>
        <CardContent
          flexDirection='row'
          justifyContent='center'
          className='gap-x-16 px-24 py-[1.1rem]'
        >
          <FlexBox flexDirection='col' className='my-auto h-full shrink-0'>
            <Text sizes='18' weight='700'>
              880
              <Text sizes='14' weight='500' className='text-gray-500'>
                점
              </Text>
            </Text>
            <Text sizes='12' className='text-gray-500'>
              상위 27%
            </Text>
            <Text sizes='12' className='text-gray-500'>
              50점 (03.08 대비)
            </Text>
          </FlexBox>
          <FlexBox className='h-[9.2rem] w-[18.5rem] bg-orange-500'></FlexBox>
        </CardContent>
      </Card>
    </>
  );
};
export default MyCreditSection;
