'use client';

import Icon from '@/components/Icon';
import SwiperWrapper from '@/components/SwiperWrapper';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import { getSpendingHabitsCards } from '@/service/api/financial-product/cards';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import LoadingPage from '../../loading';

const SpendingHabitsCardSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const {
    data: spendingHabitsCards,
    isPending,
    isSuccess
  } = useQuery({
    queryKey: ['spendingHabitsCards'],
    queryFn: getSpendingHabitsCards
  });

  if (isPending) {
    return <LoadingPage />;
  }

  const currentCard = isSuccess ? spendingHabitsCards[currentCardIndex] : null;

  return (
    <section className='bg-white pb-[6rem] pt-40'>
      <Text variant='h2' sizes='20' weight='600' className='mb-[2.6rem] text-center'>
        소비습관에 맞는 카드
      </Text>
      <div className='mx-auto mb-16 flex w-[25.4rem] items-center rounded-[10rem] border border-primary bg-[#FAF7F5] px-12 py-[0.8rem]'>
        <Icon
          src='/icons/financial-product/circular-graph.svg'
          alt='circular graph icon'
          size='16'
        />
        <Text className='ml-[0.4rem]'>
          최근 소비내역중{' '}
          <Text weight='700' className='text-primary'>
            교통비
          </Text>
          가 높았어요!
        </Text>
      </div>
      <>
        {isSuccess && (
          <SwiperWrapper dots coverflow setIndex={setCurrentCardIndex}>
            {spendingHabitsCards.map(({ title, image }) => {
              return (
                <Image
                  key={title}
                  src={`/images/financial-product/${image}.webp`}
                  alt={title}
                  width={500}
                  height={160}
                  className='w-full'
                  priority
                />
              );
            })}
          </SwiperWrapper>
        )}
        <FlexBox flexDirection='col' alignItems='center' className='mt-32 px-20'>
          <Text sizes='12' className='mb-[0.2rem]'>
            {currentCard?.title}
          </Text>
          <Text sizes='18' weight='600' className='mb-16'>
            {currentCard?.cardName}
          </Text>

          <ul className='mb-20 flex gap-8'>
            {currentCard?.conditions.map((condition) => {
              return (
                <li key={condition} className='rounded-[10rem] bg-gray-50 px-12 py-8'>
                  <Text sizes='12' weight='500' className='text-gray-700'>
                    {condition}
                  </Text>
                </li>
              );
            })}
          </ul>

          <ul className='flex w-full flex-col gap-[0.6rem]'>
            {currentCard?.benefits.map(({ title, iconPath, detail }) => {
              const content = detail.split(' ');

              return (
                <li key={title}>
                  <Card className='flex w-full items-center gap-[1.2rem] border border-gray-100 px-24 py-16'>
                    <Icon src={iconPath} alt={title} size='20' className='rounded-none' />
                    <Text>
                      {content[0]}{' '}
                      <Text weight='700' className='text-primary'>
                        {content[1]}{' '}
                      </Text>
                      {content[2]}
                    </Text>
                  </Card>
                </li>
              );
            })}
          </ul>
        </FlexBox>
      </>
    </section>
  );
};

export default SpendingHabitsCardSection;
