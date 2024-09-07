// 현재 ?달 소비
import React from 'react';
import { WidgetItemCardContainer } from './_components/WidgetItemCardContainer';
import { CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { returnDate } from '@/shared/utils/dateUtils';

export const WidgetCurrentMonth = () => {
  const { month } = returnDate();
  return (
    <WidgetItemCardContainer title={`${month}월 현재 소비`} subText='300,000원'>
      <CardContent flexDirection='col' justifyContent='between'>
        <FlexBox alignItems='end' justifyContent='between' className='w-full'>
          <FlexBox className='gap-4'>
            <FlexBox className='h-[4rem] w-[1.5rem] rounded-full bg-gray-200'>
              <div className='h-3/4 w-[1.5rem] self-end rounded-full bg-primary'></div>
            </FlexBox>
            <FlexBox className='h-[4rem] w-[1.5rem] rounded-full bg-gray-200'>
              <div className='h-2/4 w-[1.5rem] self-end rounded-full bg-primary'></div>
            </FlexBox>
          </FlexBox>
          <Text sizes='12' className='text-gray-700'>
            지난 달 보다 <br /> <span className='font-700 text-primary'>20만원</span> 절약 중
          </Text>
        </FlexBox>
      </CardContent>
    </WidgetItemCardContainer>
  );
};
