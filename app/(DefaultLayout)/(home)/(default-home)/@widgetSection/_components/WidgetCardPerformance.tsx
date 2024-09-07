// 이번 달 카드실적
import React from 'react';
import { WidgetItemCardContainer } from './_components/WidgetItemCardContainer';
import Icon from '@/components/Icon';
import { CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';

export const WidgetCardPerformance = () => {
  return (
    <WidgetItemCardContainer title='이번 달 카드실적' subText='245,000원'>
      <CardContent justifyContent='between' alignItems='end'>
        <Icon
          src='/icons/categories/non-background/card.svg'
          alt='카드 이미지'
          size='56'
          className='rounded-none'
        />
        <Text sizes='12' className='text-gray-700'>
          KB국민 <br />
          70%
        </Text>
      </CardContent>
    </WidgetItemCardContainer>
  );
};
