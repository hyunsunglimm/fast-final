// 다가오는 지출
import React from 'react';
import { WidgetItemCard } from './WidgetItemCard';
import Icon from '@/components/Icon';
import { CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

export const WidgetUpcomingExpenses = () => {
  return (
    <WidgetItemCard title='다가오는 지출' subText='12,000원'>
      <CardContent alignItems='end' justifyContent='between'>
        <FlexBox flexDirection='col' className='w-[7.1rem] '>
          <Text sizes='12' className='text-gray-700'>
            D-13
          </Text>
          <Text sizes='12' className='inline-block w-full truncate text-gray-500'>
            넷플릭스(NETFLIX)
          </Text>
        </FlexBox>
        <Icon
          src='/icons/categories/non-background/netflix.svg'
          alt='넷플릭스 아이콘'
          size='48'
          className='rounded-none'
        />
      </CardContent>
    </WidgetItemCard>
  );
};
