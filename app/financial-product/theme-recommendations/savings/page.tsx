import Text from '@/components/ui/Text';
import React from 'react';

const page = () => {
  return (
    <section>
      <Text variant='h1' sizes='title24'>
        올 겨울에 6개월 적금 들고 내년 여름 여행가자
      </Text>
      <div className='flex flex-col gap-4'>
        <div className='flex h-[18.8rem] items-center justify-center bg-green-300'>
          <Text>
            5000원으로 시작하면 <br /> 1,772,807원 (세전)
          </Text>
        </div>
        <div className='flex h-[18.8rem] items-center justify-center bg-green-300'>
          <Text>
            월 20만원 적금하면 <br /> 1,215,249원 (세전)
          </Text>
        </div>
        <div className='flex h-[18.8rem] items-center justify-center bg-green-300'>
          <Text>
            월 30만원 적금하면 <br /> 1,822,207원 (세전)
          </Text>
        </div>
        <div className='flex h-[18.8rem] items-center justify-center bg-green-300'>
          <Text>
            월 50만원 적금하면 <br /> 3,034,792원 (세전)
          </Text>
        </div>
      </div>
    </section>
  );
};

export default page;
