'use client';

import Image from 'next/image';
import SpeechBubbleHeader from './_components/SpeechBubbleHeader';
import CurrentCardInfo from './_components/CurrentCardInfo';
import SwiperWrapper from '@/components/SwiperWrapper';
import { useState } from 'react';
import StandardComparison from './_components/StandardComparison';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import BenefitCircle from './_components/BenefitCircle';
import { IsBackHeader } from '@/components/header';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getComparedCards } from '@/service/api/financial-product/cards';
import Button from '@/components/ui/Button';
import Link from 'next/link';

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

const ResultPage = () => {
  const { data: comparedCards } = useQuery({
    queryKey: ['comparedCards'],
    queryFn: getComparedCards
  });
  const searchParams = useSearchParams();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = comparedCards![currentCardIndex];

  const {
    id,
    annualBenefit,
    name,
    monthlyBenefit,
    discountLimit,
    annualFee,
    prevMonthPerformance,
    benefits,
    diffByStandardA,
    diffByStandardB
  } = currentCard;

  return (
    <>
      <IsBackHeader href={`./?${searchParams.toString()}`} />
      <main className='bg-gray-50'>
        <SpeechBubbleHeader id={id} annualBenefit={annualBenefit} />
        <section className='pt-[14.4rem]'>
          <SwiperWrapper arrow setIndex={setCurrentCardIndex}>
            <Image
              src='/images/financial-product/result-shinhan-card.webp'
              alt='신한 카드 비교 결과 이미지'
              width={400}
              height={160}
              className='pointer-events-none mx-auto w-[25.2rem]'
              priority
            />
            <Image
              src='/images/financial-product/result-shinhan-mrlife-card.webp'
              alt='신한 카드 비교 결과 이미지'
              width={400}
              height={160}
              className='pointer-events-none mx-auto w-[25.2rem]'
              priority
            />
          </SwiperWrapper>
        </section>
        <CurrentCardInfo
          id={id}
          name={name}
          monthlyBenefit={monthlyBenefit}
          discountLimit={discountLimit}
          annualFee={annualFee}
          prevMonthPerformance={prevMonthPerformance}
          benefits={benefits}
        />
        <StandardComparison
          difference={diffByStandardA}
          standard={0}
          id={id}
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
          difference={diffByStandardB}
          standard={1}
          id={id}
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

export default ResultPage;
