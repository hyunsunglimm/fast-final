// 나의 챌린지
import React from 'react';
import { WidgetItemCardContainer } from './_components/WidgetItemCardContainer';
import { CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import Icon from '@/components/Icon';

export const WidgetMyChallenge = () => {
  return (
    <WidgetItemCardContainer title='나의 챌린지' subText='250,000원'>
      <CardContent justifyContent='between' alignItems='end'>
        <Icon
          src='/icons/categories/non-background/Layer_11.svg'
          alt='과녁 이미지'
          size='48'
          className='rounded-none'
        />
        <Text sizes='12' className='text-gray-700'>
          참여 중 <br />
          2개
        </Text>
      </CardContent>
    </WidgetItemCardContainer>
  );
};
