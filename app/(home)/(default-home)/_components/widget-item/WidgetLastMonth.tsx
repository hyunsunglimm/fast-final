// 지난 달 소비
import React from 'react';
import { WidgetItemCard } from './_components/WidgetItemCard';
import Icon from '@/components/Icon';
import { CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';

export const WidgetLastMonth = () => {
  return (
    <WidgetItemCard title='저번달에 쓴 돈'>
      <CardContent className='relative mt-8 block flex-1'>
        <FlexBox
          alignItems='center'
          justifyContent='center'
          flexDirection='col'
          className='absolute h-[7.2rem] w-[7.2rem] rounded-full bg-select'
        >
          <Icon src='/icons/categories/non-background/bus.svg' alt='버스 아이콘' size='40' />
          <Text className='text-primary' sizes='12'>
            42%
          </Text>
        </FlexBox>
        <FlexBox
          alignItems='center'
          justifyContent='center'
          flexDirection='col'
          className='absolute right-0 top-0 aspect-square h-[4rem] w-[4rem] max-w-fit rounded-full bg-gray-100'
        >
          <Icon
            src='/icons/categories/non-background/present.svg'
            alt='선물 아이콘'
            className='rounded-none'
            size='16'
          />
          <Text className='text-gray-700' sizes='10'>
            5%
          </Text>
        </FlexBox>
        <FlexBox
          alignItems='center'
          justifyContent='center'
          flexDirection='col'
          className='absolute bottom-0 right-4 aspect-square h-[4rem] w-[4rem] max-w-fit rounded-full bg-gray-100'
        >
          <Icon
            src='/icons/categories/non-background/book.svg'
            alt='책 아이콘'
            size='16'
            className='rounded-none'
          />
          <Text className='text-gray-700' sizes='12'>
            30%
          </Text>
        </FlexBox>
      </CardContent>
    </WidgetItemCard>
  );
};
