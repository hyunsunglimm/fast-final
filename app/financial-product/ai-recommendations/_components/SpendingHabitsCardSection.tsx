'use client';

import Icon from '@/components/Icon';
import SwiperWrapper from '@/components/SwiperWrapper';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import { CardResponseType } from '@/shared/types/response/card';
import { Card } from '@/components/ui/card';
import { CARD_BENEFIT_CATEGORIES } from '@/shared/utils/financial-product/staticData';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
import sanityLoader from '@/shared/utils/sanityLoader';

const SpendingHabitsCardSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const {
    data: spendingHabitsCards,
    isPending,
    isSuccess
  } = useQuery<CardResponseType[]>({
    queryKey: ['spendingHabitsCards'],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/cards/spending-habits`
      );
      return await res.json();
    }
  });

  const highlightText = (text: string) => {
    const regex = /(\d+%|\d+[천만억]?원)/g;

    const parts = text.split(regex);

    return parts.map((part, index) => {
      return (
        <Text
          key={index}
          weight='700'
          className={`${regex.test(part) ? 'text-primary' : 'text-gray-700'}`}
        >
          {part}
        </Text>
      );
    });
  };

  if (isPending) {
    return <LoadingBackdrop isFullScreen />;
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
            {spendingHabitsCards.map(({ id, image_horizontal, name }) => {
              return (
                <Image
                  loader={sanityLoader}
                  key={id}
                  src={image_horizontal}
                  alt={`${name} 카드 이미지`}
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
            {currentCard?.company}
          </Text>
          <Text sizes='18' weight='600' className='mb-16'>
            {currentCard?.name}
          </Text>

          <ul className='mb-20 flex gap-8'>
            <li className='rounded-[10rem] bg-gray-50 px-12 py-8'>
              <Text sizes='12' weight='500' className='text-gray-700'>
                전월실적 {currentCard?.prev_month_performance.toLocaleString()}원 이상
              </Text>
            </li>
            <li className='rounded-[10rem] bg-gray-50 px-12 py-8'>
              <Text sizes='12' weight='500' className='text-gray-700'>
                연회비 {currentCard?.annual_fee.toLocaleString()}원
              </Text>
            </li>
          </ul>

          <ul className='flex w-full flex-col gap-[0.6rem]'>
            {currentCard?.benefits.map(({ category, benefitDetails }) => {
              const categoryInfo = CARD_BENEFIT_CATEGORIES.find((c) => c.title_en === category);
              const benefits =
                benefitDetails.length > 2 ? benefitDetails.slice(0, 2) : benefitDetails;

              return (
                <li key={category}>
                  <Card className='flex w-full items-center gap-[1.2rem] border border-gray-100 px-24 py-16'>
                    <Icon
                      src={categoryInfo?.lineIconPath || ''}
                      alt={`${categoryInfo?.title_kr} 아이콘`}
                      size='20'
                      className='shrink-0 rounded-none'
                    />
                    <ul className='hide-scrollbar flex gap-12 overflow-x-scroll'>
                      {benefits.map((benefit) => {
                        return (
                          <li key={benefit} className='shrink-0'>
                            <Text weight='700'>{highlightText(benefit)}</Text>
                          </li>
                        );
                      })}
                    </ul>
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
