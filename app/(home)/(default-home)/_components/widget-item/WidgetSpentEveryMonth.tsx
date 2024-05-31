// 매월 나가는 돈
import React from 'react';
import { WidgetItemCard } from './_components/WidgetItemCard';
import Icon from '@/components/Icon';
import { CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { ProgressBar } from '@/components/ProgressBar';

export const WidgetSpentEveryMonth = () => {
  return (
    <WidgetItemCard title='매월 나가는 돈' subText='245,000원'>
      <CardContent flexDirection='col' justifyContent='between'>
        <FlexBox alignItems='end' justifyContent='between' className='mb-8 mt-10 w-full'>
          <Icon
            src='/icons/categories/non-background/sofa.svg'
            alt='소파 아이콘'
            size='40'
            className='rounded-none'
          />
          <Text className='text-gray-700'> 75%</Text>
        </FlexBox>
        <div className='h-[1.5rem] w-full rounded-full bg-gray-300/50'>
          <ProgressBar progressPercent={30} barColor='primary' />
        </div>
      </CardContent>
    </WidgetItemCard>
  );
};
