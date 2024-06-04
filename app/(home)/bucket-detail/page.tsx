'use client';
import React, { useEffect, useState, useRef } from 'react';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Image from 'next/image';
import { ProgressBar } from '@/components/ProgressBar';
import BucketBottomSheet from './_components/BucketBottomSheet';
import { useWindowResize } from '@/shared/hooks/useWindowResize';
import useOnloadImage from '@/shared/hooks/useOnloadImage';
const DetailBucketPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState(0);
  const { windowHeight, windowWidth } = useWindowResize();
  const { onload, onLoadImage } = useOnloadImage();
  useEffect(() => {
    const updateHeight = () => {
      if (sectionRef.current) {
        const computedStyle = window.getComputedStyle(sectionRef.current);
        const rect = sectionRef.current.getBoundingClientRect();
        const marginTop = parseFloat(computedStyle.marginTop);
        const marginBottom = parseFloat(computedStyle.marginBottom);
        const totalReactHeight = rect.height + marginTop + marginBottom + rect.top;

        setTotalHeight(windowHeight - totalReactHeight);
      }
    };
    const timeoutId = setTimeout(updateHeight, 100);

    return () => clearTimeout(timeoutId);
  }, [windowHeight, windowWidth]);

  return (
    <>
      <section className='mt-20 px-20' ref={sectionRef}>
        <FlexBox justifyContent='between'>
          <FlexBox flexDirection='col' className='text-white'>
            <Text sizes='20' weight='600' className='mb-8'>
              친구랑 유럽여행 가기
            </Text>
            <Text>금요일마다 50,000원씩</Text>
            <Text>8,000,000원 모으기</Text>
          </FlexBox>
          <Image
            src='/images/home/bucket_img_step1.webp'
            width={155}
            height={155}
            alt='버킷리스트'
            title='버킷리스트 이미지'
            loading='lazy'
            className='pointer-events-none h-[15.5rem] w-[15.5rem]'
            onLoad={onLoadImage}
            quality={onload ? '100' : '10'}
          />
        </FlexBox>
        <FlexBox className='mb-16 gap-x-8'>
          <Text sizes='18' weight='600' className='text-white'>
            500000원
          </Text>
          <Text
            sizes='12'
            className='inline-block rounded-l-full rounded-r-3xl bg-white px-8 py-[0.4rem]'
          >
            상품 4개 연결
          </Text>
        </FlexBox>
        <div className='h-[0.8rem] w-full rounded-full bg-gray-300/50'>
          <ProgressBar barColor='white' progressPercent={35} />
        </div>
        <Text className='mt-4 inline-block w-full self-end text-end text-white' weight='500'>
          35%
        </Text>
      </section>
      <BucketBottomSheet totalHeight={totalHeight} windowWidth={windowWidth} />
    </>
  );
};
export default DetailBucketPage;
