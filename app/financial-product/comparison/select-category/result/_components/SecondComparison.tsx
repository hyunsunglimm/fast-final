import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import React from 'react';
import ResultCard from './ResultCard';
import BenefitCircle from './BenefitCircle';

const resultCardInfo = [
  {
    title: '카드 A',
    imgPath: '/images/financial-product/kakao-shinhan-time.png',
    categories: '투썸플레이스, 스타벅스, 커피빈, 폴바셋',
    benefits: ['50% 할인', '월 최대 1만원']
  },
  {
    title: '카드 B',
    imgPath: '/images/financial-product/shinhan-mrlife.png',
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

const SecondComparison = () => {
  return (
    <section className='mt-12 bg-white px-20 py-40'>
      <Text variant='p' weight='500' className='mb-[0.8rem] text-gray-700'>
        커피 전문점
      </Text>
      <Text sizes='20' weight='700'>
        카드 A를 사용하면
        <br />{' '}
        <Text sizes='20' weight='700' className='text-active'>
          더 많은 가맹점
        </Text>
        에서 할인을 받아요
      </Text>
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
      <Text sizes='16' weight='500'>
        혜택 비교
      </Text>
      <FlexBox flexDirection='col' className='gap-12'>
        {resultCardInfo.map((cardInfo) => (
          <ResultCard key={cardInfo.title} cardInfo={cardInfo} />
        ))}
      </FlexBox>
    </section>
  );
};

export default SecondComparison;
