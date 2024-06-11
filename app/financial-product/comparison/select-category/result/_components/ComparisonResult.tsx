'use client';

import SpeechBubbleHeader from './SpeechBubbleHeader';
import CurrentCardInfo from './CurrentCardInfo';
import SwiperWrapper from '@/components/SwiperWrapper';
import { useState } from 'react';
import StandardComparison from './StandardComparison';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import BenefitCircle from './BenefitCircle';
import { IsBackHeader } from '@/components/header';
import { useQuery } from '@tanstack/react-query';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
import { CardSkeleton, SqureSkeleton } from '@/components/ui/skeleton';
import { CardResponseType } from '@/shared/types/response/card';
import { useQueryString } from '@/shared/hooks/useQueryString';
import ResultCardImage from './ResultCardImage';

const comparedResultA = [
  {
    title: '카드 A',
    imgPath: '/images/financial-product/kakao-shinhan-time.webp',
    categories: '시내버스, 지하철, 택시',
    benefits: ['10% 할인', '월 최대 1만원']
  },
  {
    title: '카드 B',
    imgPath: '/images/financial-product/shinhan-mrlife.webp',
    categories: '시내버스, 지하철',
    benefits: ['건별 200월 할인', '월 최대 5천원']
  }
];

const comparedResultB = [
  {
    title: '카드 A',
    imgPath: '/images/financial-product/kakao-shinhan-time.webp',
    categories: '투썸플레이스, 스타벅스, 커피빈, 폴바셋',
    benefits: ['50% 할인', '월 최대 1만원']
  },
  {
    title: '카드 B',
    imgPath: '/images/financial-product/shinhan-mrlife.webp',
    categories: '투썸플레이스, 스타벅스',
    benefits: ['60% 할인', '월 최대 1만원']
  }
];

const cafeBenefitInfo = [
  {
    id: 'c1',
    title: '스타벅스',
    rate: 50,
    color: 'blue',
    positionClass: 'top-[5rem] left-0'
  },
  {
    id: 'c2',
    title: '투썸플레이스',
    rate: 50,
    color: 'blue',
    positionClass: 'top-0 left-[6.2rem]'
  },
  {
    id: 'c3',
    title: '커피빈',
    rate: 50,
    color: 'blue',
    positionClass: 'top-[3.1rem] right-[1.2rem]'
  },
  {
    id: 'c4',
    title: '풀바셋',
    rate: 50,
    color: 'blue',
    positionClass: 'bottom-0 left-[3.8rem]'
  },
  {
    id: 'c5',
    title: '투썸플레이스',
    rate: 60,
    color: 'red',
    positionClass: 'top-[6.3rem] left-[10.5rem]'
  },
  {
    id: 'c6',
    title: '스타벅스',
    rate: 60,
    color: 'red',
    positionClass: 'bottom-[2.2rem] right-[2.8rem]'
  }
];

const ComparisonResult = () => {
  const { searchParams, queryValues } = useQueryString();
  const { data: comparedCards, isLoading } = useQuery<CardResponseType[]>({
    queryKey: ['comparedCards', ...queryValues('card')],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/cards/comparison/result?card=${queryValues('card')}`
      );
      return await res.json();
    }
  });

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  if (isLoading) {
    return (
      <div className='relative flex h-dvh flex-col justify-between px-20 py-16'>
        <LoadingBackdrop />
        <CardSkeleton />
        <SqureSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  const currentCard = comparedCards![currentCardIndex];

  const { discount_limit: discountLimit } = currentCard;

  return (
    <>
      <IsBackHeader href={`./?${searchParams.toString()}`} />
      <main className='bg-gray-50'>
        <SpeechBubbleHeader id={currentCardIndex} annualBenefit={discountLimit * 12} />
        <section className='pt-[14.4rem]'>
          <SwiperWrapper arrow setIndex={setCurrentCardIndex}>
            <ResultCardImage
              imageUrl={comparedCards![0].image_horizontal}
              alt='신한 카드 비교 결과 이미지'
            />
            <ResultCardImage
              imageUrl={comparedCards![1].image_horizontal}
              alt='신한 카드 비교 결과 이미지'
            />
          </SwiperWrapper>
        </section>
        <CurrentCardInfo id={currentCardIndex} currentCard={currentCard} />
        <StandardComparison
          difference='더 많은 가맹점'
          standard={0}
          id={currentCardIndex}
          comporisonResult={comparedResultA}
          content={
            <FlexBox justifyContent='center' className='my-28 gap-[4rem]' alignItems='end'>
              <FlexBox flexDirection='col' className='gap-16'>
                <div className='h-[12.6rem] w-[6.4rem] rounded-md bg-gradient-to-t from-[#5A7EFF] to-[#819CFF]' />
                <Text sizes='12' weight='700'>
                  월 최대 1만원
                </Text>
              </FlexBox>
              <FlexBox flexDirection='col' className='gap-16'>
                <div className='h-[9.5rem] w-[6.4rem] rounded-md bg-gradient-to-t from-[#FF5C46] to-[#FF8675]' />
                <Text sizes='12' weight='700'>
                  월 최대 5천원
                </Text>
              </FlexBox>
            </FlexBox>
          }
        />
        <StandardComparison
          difference='2개의 가맹점'
          standard={1}
          id={currentCardIndex}
          comporisonResult={comparedResultB}
          content={
            <div className='relative my-28 h-[24.5rem] w-full'>
              {cafeBenefitInfo.map(({ id, title, rate, color, positionClass }) => {
                return (
                  <BenefitCircle
                    key={id}
                    title={title}
                    rate={rate}
                    color={color as 'blue' | 'red'}
                    positionClass={positionClass}
                  />
                );
              })}
            </div>
          }
        />
        <FlexBox className='gap-6 bg-white px-20 pb-[3.4rem] pt-20'>
          <Button asChild styled='outline'>
            <Link href='/financial-product/comparison?tab1=카드&tab2=신용카드'>
              <Text sizes='16'>상품비교 다시하기</Text>
            </Link>
          </Button>
          <Button asChild styled='fill_black'>
            <Link href='/financial-product'>
              <Text sizes='16'>확인</Text>
            </Link>
          </Button>
        </FlexBox>
      </main>
    </>
  );
};

export default ComparisonResult;
