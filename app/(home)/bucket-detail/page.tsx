'use client';
import React, { useEffect, useState, useRef } from 'react';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Image from 'next/image';
import { ProgressBar } from '@/components/ProgressBar';
import BucketBottomSheet from './_components/BucketBottomSheet';
import { useWindowResize } from '@/shared/hooks/useWindowResize';
import useOnloadImage from '@/shared/hooks/useOnloadImage';
import { useQuery } from '@tanstack/react-query';
import { useUserSession } from '@/shared/hooks/useUserSession';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
import { BucketResponseType } from '@/shared/types/response/bucket';
import { deleteCommaReturnNumber } from '@/shared/utils/deleteComma';

const DetailBucketPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState(0);
  const { windowHeight, windowWidth } = useWindowResize();
  const { onload, onLoadImage } = useOnloadImage();
  const user = useUserSession();
  const { data: bucket, isLoading } = useQuery<BucketResponseType>({
    queryKey: ['bucket', user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/bucket?user-email=${user?.email}`
      );
      return await res.json();
    }
  });
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

  const targetAmount = deleteCommaReturnNumber(bucket?.target_amount || '');
  const currentAmount = deleteCommaReturnNumber(bucket?.savings_amount || '');
  const progressPercent = Math.round((currentAmount / targetAmount) * 100 * 10) / 10;

  return (
    <>
      {isLoading && <LoadingBackdrop isFullScreen />}
      <section className='mt-20 px-20' ref={sectionRef}>
        <FlexBox justifyContent='between'>
          <FlexBox flexDirection='col' className='text-white'>
            <Text sizes='20' weight='600' className='mb-8'>
              {bucket?.bucket_name}
            </Text>
            <Text>
              {bucket?.day_of_week}마다 {bucket?.savings_amount}원씩
            </Text>
            <Text>{bucket?.target_amount}원 모으기</Text>
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
        <FlexBox className='mb-16 w-full gap-x-8'>
          <Text sizes='18' weight='600' className='text-white'>
            {bucket?.target_amount}원
          </Text>
          <div className='w-[7.8rem] rounded-bucketlist bg-white px-8 py-[0.4rem]'>
            <Text sizes='12'>상품 {bucket?.my_saving_product.length}개 연결</Text>
          </div>
        </FlexBox>
        <div className='h-[0.8rem] w-full rounded-full bg-gray-300/50'>
          <ProgressBar barColor='white' progressPercent={progressPercent} />
        </div>
        <Text className='mt-4 inline-block w-full self-end text-end text-white' weight='500'>
          {progressPercent}%
        </Text>
      </section>
      <BucketBottomSheet totalHeight={totalHeight} windowWidth={windowWidth} />
    </>
  );
};
export default DetailBucketPage;
