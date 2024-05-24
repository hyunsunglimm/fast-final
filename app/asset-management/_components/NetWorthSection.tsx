'use client';
import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import { motion } from 'framer-motion';
import { useWindowResize } from '@/hooks/useWindowResize';
import Image from 'next/image';
import FlexBox from '@/components/ui/FlexBox';
import { useTotalWidth } from '@/hooks/useTotalWidth';
const ItemList = [
  {
    badgeText: '4개 보유',
    title: '입출금 통장',
    amount: '4000000',
    imgSrc: '/images/asset-page/bank-book.svg'
  },
  {
    badgeText: '2개 보유',
    title: '증권·투자',
    amount: '400000',
    imgSrc: '/images/asset-page/hand.svg'
  }
];

const NetWorthSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const motionRef = useRef<HTMLDivElement | null>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [dragging, setDragging] = useState(false);
  const { documentSize } = useWindowResize();
  const { totalWidth } = useTotalWidth(motionRef);

  useEffect(() => {
    if (containerRef.current && motionRef.current) {
      setConstraints({
        left: -(motionRef.current.scrollWidth - containerRef.current.clientWidth),
        right: 0
      });
    }
    console.log('totalWidth', totalWidth);
  }, [documentSize]);

  const handleItemClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
  };
  const touchClass = dragging ? 'touch-pan-x' : 'touch-auto';

  return (
    <>
      <div className='mb-24 ml-20 mt-20 flex flex-col'>
        <Text sizes='16' weight='600'>
          순자산
        </Text>
        <Text sizes='24' weight='700'>
          3,123,567원
        </Text>
      </div>

      <div className={`${touchClass} relative w-full overflow-hidden`} ref={containerRef}>
        <motion.div
          ref={motionRef}
          drag='x'
          dragConstraints={constraints}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          className={'mb-4 flex cursor-grab items-center gap-x-16'}
          style={{ width: `${totalWidth / 10}rem` }}
        >
          <div className='h-[2rem] w-[0.4rem] shrink-0' aria-hidden></div>
          {ItemList.map((item) => {
            return (
              <CardContents
                key={item.title}
                badgeText={item.badgeText}
                title={item.title}
                amount={item.amount}
                imgSrc={item.imgSrc}
              />
            );
          })}
          <AddContents />
          <div className='h-[2rem] w-[0.4rem] shrink-0' aria-hidden></div>
        </motion.div>
      </div>
    </>
  );
};
export default NetWorthSection;

type CardContentProps = {
  badgeText: string;
  title: string;
  amount: string;
  imgSrc: string;
};
const CardContents = ({ badgeText, title, amount, imgSrc }: CardContentProps) => {
  return (
    <Card className={'aspect-square w-[24rem] shrink-0 p-24'}>
      <CardHeader className='space-y-1'>
        <Text sizes='12' className='text-primary'>
          {badgeText}
        </Text>
        <Text sizes='16' weight='600'>
          {title}
        </Text>
      </CardHeader>
      <CardContent flexDirection='col' className='mt-16'>
        <Text sizes='20' weight='700'>
          {Number(amount).toLocaleString()}원
        </Text>
        <FlexBox className='pointer-events-none relative mt-[0.7rem] h-[10rem] w-[10rem] self-end'>
          <Image src={imgSrc} alt={`${title} 이미지`} fill sizes='auto' />
        </FlexBox>
      </CardContent>
    </Card>
  );
};

const AddContents = () => {
  return (
    <Card
      className={
        'flex aspect-square w-[24rem] shrink-0 items-center justify-center bg-gray-200 p-24'
      }
    >
      <CardContent
        flexDirection='col'
        alignItems='center'
        className='bottom-0 top-0 my-auto space-y-6'
      >
        <FlexBox className='pointer-events-none relative h-[4rem] w-[4rem]'>
          <Image src='/icons/asset-page/ico_plus.svg' alt='통장 이미지' fill sizes='auto' />
        </FlexBox>
        <Text sizes='20' weight='400' className='text-gray-500'>
          자산 추가
        </Text>
      </CardContent>
    </Card>
  );
};
