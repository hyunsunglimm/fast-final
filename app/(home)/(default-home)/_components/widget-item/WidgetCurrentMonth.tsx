// 현재 ?달 소비
import React from 'react';
import { WidgetItemCardContainer } from './_components/WidgetItemCardContainer';
import Icon from '@/components/Icon';
import { CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

export const WidgetCurrentMonth = () => {
  return (
    <WidgetItemCardContainer title='4월 현재 소비' subText='300,000원'>
      <CardContent flexDirection='col' justifyContent='between'>
        <FlexBox alignItems='end' justifyContent='between' className='w-full'>
          <Icon
            src='/icons/categories/non-background/money-purse.svg'
            alt='돈 주머니 아이콘'
            size='34'
            className='rounded-none'
          />
          <Text sizes='12' className='text-gray-700'>
            지난 달 보다 <br /> <span className='font-700 text-primary'>20만원</span> 절약 중
          </Text>
        </FlexBox>
      </CardContent>
    </WidgetItemCardContainer>
  );
};
