'use client';
import React, { useEffect, useState, useRef } from 'react';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Image from 'next/image';
import { ProgressBar } from '@/components/ProgressBar';
import BucketBottomSheet from './_components/BucketBottomSheet';
import { useWindowResize } from '@/hooks/useWindowResize';
const DetailBucketPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { windowHeight, windowWidth } = useWindowResize();

  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(sectionRef.current);
      const marginTop = parseFloat(computedStyle.marginTop);
      const marginBottom = parseFloat(computedStyle.marginBottom);
      const totalHeight = rect.height + marginTop + marginBottom + rect.top;
      setHeight(windowHeight - totalHeight);
    }
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
            placeholder='blur'
            blurDataURL='data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSAwAAAABAAI7W2YAZAAA/v////8vQUxQSAwAAAABAAI7W2YAZA'
            className='pointer-events-none h-[15.5rem] w-[15.5rem]'
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
      </section>
      <BucketBottomSheet totalHeight={height} windowWidth={windowWidth} />
    </>
  );
};
export default DetailBucketPage;
