// 이번 달 남은 예산
import React from 'react';
import { ProgressBar } from '@/components/ProgressBar';
import { CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';
import { WidgetItemCardContainer } from '../_components';

const WidgetBudget = () => {
  return (
    <WidgetItemCardContainer title='이번 달 남은 예산' subText='90,000원'>
      <CardContent flexDirection='col' justifyContent='between'>
        <FlexBox alignItems='end' justifyContent='between' className='mb-8 mt-10 w-full'>
          <Icon
            src='/icons/categories/non-background/money-purse.svg'
            alt='돈 주머니 아이콘'
            size='34'
            className='rounded-none'
          />
          <Text className='text-gray-700'> 75%</Text>
        </FlexBox>
        <div className='h-[1.5rem] w-full rounded-full bg-gray-300/50'>
          <ProgressBar progressPercent={80} barColor='primary' />
        </div>
      </CardContent>
    </WidgetItemCardContainer>
  );
};
export default WidgetBudget;
