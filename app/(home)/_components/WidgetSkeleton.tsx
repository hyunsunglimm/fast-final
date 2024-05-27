import React from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { SqureSkeleton, CardSkeleton } from '@/components/ui/skeleton';

const WidgetSkeleton = () => {
  return (
    <div className='animate-pulse'>
      <FlexBox justifyContent='between' alignItems='center' className='mb-[1.6rem] mt-[4rem]'>
        <Text sizes='20' weight='700' variant='h2'>
          한 눈에 보기
        </Text>
        <div className='h-[2rem] w-[4rem] rounded bg-gray-200'></div>
      </FlexBox>
      <CardSkeleton />
      <div className='mb-[3rem] grid grid-cols-2 gap-x-20 gap-y-20'></div>
      <div className='mb-[3rem] grid grid-cols-2 gap-x-20 gap-y-20'>
        {[...Array(6)].map((_, index) => (
          <SqureSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default WidgetSkeleton;
