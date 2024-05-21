'use client';

import { IsBackHeader } from '@/components/header';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const cardCompanies = [
  { title: '신한', fileName: 'shinhan-logo-icon' },
  { title: '현대', fileName: 'hyundai-logo-icon' },
  { title: '비씨', fileName: 'bc-logo-icon' }
];

const filterings = ['대중교통', '편의점'];

const comparisonCards = [
  {
    id: 1,
    title: '신한카드 Mr.Life',
    description: '공과금부터 쇼핑까지 생활혜택!',
    fileName: 'shinhan-mrlife',
    benefits: ['식비', '편의점', '포인트']
  },
  {
    id: 2,
    title: '카카오뱅크 신한카드 Time',
    description: 'Time For us to Shine',
    fileName: 'kakao-shinhan-time',
    benefits: ['대중교통', '택시', '편의점']
  },
  {
    id: 3,
    title: '카카오페이 신한 라이언',
    description: '귀여운 라이언 대박 예감',
    fileName: 'kakao-shinhan-ryan',
    benefits: ['포인트', '카페', '대중교통']
  },
  {
    id: 4,
    title: 'BC 바로 클리어 플러스',
    description: '월200 직장인에게 추천!',
    fileName: 'bc-clear-plus',
    benefits: ['식비', '온라인', '스트리밍']
  },
  {
    id: 5,
    title: '밸런스 카드',
    description: '혜택과 실적의 밸런스',
    fileName: 'bc-clear',
    benefits: ['대중교통', '배달', '카페']
  }
];

const ComparisonPage = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  useEffect(() => {
    if (selectedCards.length > 2) {
      setSelectedCards((prev) => prev.slice(1));
    }
  }, [selectedCards]);

  const onSelect = (cardId: number) => {
    const isExisting = selectedCards.findIndex((c) => c === cardId) > -1;

    if (isExisting) {
      setSelectedCards((prev) => prev.filter((c) => c !== cardId));
    } else {
      setSelectedCards((prev) => [...prev, cardId]);
    }
  };

  return (
    <>
      <IsBackHeader title='상품비교' />
      <section className='relative pb-[13.2rem]'>
        <div className='mb-40 bg-white'>
          <Tab type='underline' array={['예적금', '대출', '카드', '보험']} tabKey='tab1' />
          <div className='border-b border-gray-100 px-20 py-16'>
            <Tab type='box' array={['신용카드', '체크카드']} tabKey='tab2' />
          </div>

          <div className='flex items-center border-b border-gray-100 px-20 py-16'>
            <div className='relative flex gap-[0.6rem] rounded-xs border border-gray-200 px-[1rem] py-[0.7rem]'>
              <Image
                src='/images/icons/filter-icon.svg'
                alt='filter icon'
                width={16}
                height={16}
                className='w-[1.6rem]'
              />
              <Text sizes='12' weight='700' className='text-primary'>
                카드사
              </Text>
              <Text
                sizes='10'
                weight='500'
                className='absolute right-[-0.6rem] top-[-0.5rem] flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full bg-primary text-white'
              >
                3
              </Text>
            </div>
            <div className='mx-16 h-[2.6rem] w-[0.1rem] border border-gray-200' />
            <ul className='flex gap-[1.6rem]'>
              {cardCompanies.map(({ title, fileName }) => {
                return (
                  <li key={title}>
                    <Image
                      src={`/images/icons/${fileName}.png`}
                      alt={title}
                      width={32}
                      height={32}
                      className='w-[3.2rem]'
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='flex items-center px-20 py-16'>
            <div className='relative flex gap-[0.6rem] rounded-xs border border-gray-200 px-[1rem] py-[0.7rem]'>
              <Image
                src='/images/icons/filter-icon.svg'
                alt='filter icon'
                width={16}
                height={16}
                className='w-[1.6rem]'
              />
              <Text sizes='12' weight='700' className='text-primary'>
                필터링
              </Text>
              <Text
                sizes='10'
                weight='500'
                className='absolute right-[-0.6rem] top-[-0.5rem] flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full bg-primary text-white'
              >
                2
              </Text>
            </div>
            <div className='mx-16 h-[2.6rem] w-[0.1rem] border border-gray-200' />
            <ul className='flex gap-[0.8rem]'>
              {filterings.map((filter) => {
                return (
                  <li
                    key={filter}
                    className='flex gap-[0.4rem] rounded-xs bg-primary py-[0.7rem] pl-[1.2rem] pr-[0.8rem] text-white'
                  >
                    <Text sizes='12' weight='600'>
                      {filter}
                    </Text>
                    <Image
                      src='/images/icons/close-icon.svg'
                      alt='close icon'
                      width={16}
                      height={16}
                      className='w-[1.6rem]'
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className='px-20'>
          <Text>
            최대 <Text weight='700'>2개</Text>까지만 선택할 수 있어요
          </Text>
          <ul className='mt-20 flex flex-col gap-[1.2rem]'>
            {comparisonCards.map((card) => {
              const isSelected = selectedCards.some((c) => c === card.id);

              return (
                <li key={card.id}>
                  <Card
                    className={`p-24 ${isSelected && 'relative ring-1 ring-primary'}`}
                    onClick={() => onSelect(card.id)}
                  >
                    <FlexBox>
                      <Image
                        src={`/images/${card.fileName}.png`}
                        alt=''
                        width={44}
                        height={70}
                        className='mr-16 w-[4.4rem]'
                      />
                      <FlexBox flexDirection='col'>
                        <Text sizes='16' weight='600' className='mb-[0.2rem]'>
                          {card.title}
                        </Text>
                        <Text className='mb-[1rem]'>{card.description}</Text>
                        <ul className='flex gap-[0.8rem]'>
                          {card.benefits.map((benefit) => {
                            return (
                              <li key={benefit}>
                                <Text sizes='12' className='text-gray-600'>
                                  {benefit}
                                </Text>
                              </li>
                            );
                          })}
                        </ul>
                      </FlexBox>
                    </FlexBox>
                    {isSelected && (
                      <Image
                        src='/images/checkbox-on.svg'
                        alt='check icon'
                        width={24}
                        height={24}
                        className='absolute right-[2.4rem] top-1/2 w-[2.4rem] translate-y-[-50%]'
                      />
                    )}
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {selectedCards.length >= 2 && (
        <div className='fixed bottom-0 left-0 right-0 mx-auto bg-gradient-to-t from-gray-200 to-white/20 px-20 py-32 xs:w-[520px]'>
          <Button size='lg' styled='fill_black'>
            비교하기
          </Button>
        </div>
      )}
    </>
  );
};

export default ComparisonPage;
