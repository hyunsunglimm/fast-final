import React from 'react';
import SectionTitle from './SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

const AssetData = [
  { title: '버킷리스트', amount: 800000, listCount: 2 },
  { title: '챌린지', amount: 200000, listCount: 4 }
];

const CollectAssetSection = () => {
  return (
    <>
      <SectionTitle>자산 모으기</SectionTitle>
      <FlexBox justifyContent='between'>
        {AssetData.map((item) => {
          return (
            <Card key={item.title} className='aspect-square w-[16.2rem] p-[2.4rem]'>
              <CardContent className='h-full p-0' flexDirection='col' justifyContent='between'>
                <FlexBox alignItems='center' className='mb-[2.4rem]'>
                  <Text>{item.title}</Text>
                  <div className='my-auto flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-orange-500 text-center text-white'>
                    {item.listCount}
                  </div>
                </FlexBox>
                <FlexBox flexDirection='col' className='gap-y-2'>
                  <Text className='text-gray-500'>모인 금액</Text>
                  <Text sizes='16'>{item.amount}원</Text>
                </FlexBox>
              </CardContent>
            </Card>
          );
        })}
      </FlexBox>
    </>
  );
};
export default CollectAssetSection;
