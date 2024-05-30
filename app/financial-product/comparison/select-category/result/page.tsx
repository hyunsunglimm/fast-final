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

const comporisonCards = [
  {
    id: 0,
    annualBenefit: 550020,
    name: '카카오뱅크 신한카드 Time',
    monthlyBenefit: 45835,
    discountLimit: '5만원',
    annualFee: '1만원',
    prevMonthPerformance: '최소 50만원',
    benefits: ['1만원 스트리밍', '1만원 영화', '1만원 배달'],
    diffByStandardA: '월 5천원',
    diffByStandardB: '더 많은 가맹점'
  },
  {
    id: 1,
    annualBenefit: 345000,
    name: '신한카드 Mr.Life',
    monthlyBenefit: 28750,
    discountLimit: '3만 2천원',
    annualFee: '1만 5천원',
    prevMonthPerformance: '최소 50만원',
    benefits: ['1만원 편의점', '1만원 병원/약국', '1만원 온라인쇼핑'],
    diffByStandardA: '월 5천원',
    diffByStandardB: '2개의 가맹점'
  }
];

const comporisonResultA = [
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

const comporisonResultB = [
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

const circleInfo = [
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
  const searchParams = useSearchParams();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = comporisonCards[currentCardIndex];

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
          comporisonResult={comporisonResultA}
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
          comporisonResult={comporisonResultB}
          content={
            <div className='relative my-28 h-[24.5rem] w-full'>
              {circleInfo.map(({ id, title, rate, color, positionClass }) => {
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
      </main>
    </>
  );
};

export default ResultPage;
