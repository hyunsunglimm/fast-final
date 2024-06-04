'use client';
import React, { MouseEvent } from 'react';
import { ListCard, ListHeader, ListFooter, ListContent } from './bucket-challenge';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useOnloadImage from '@/hooks/useOnloadImage';

const BucketListCard = () => {
  const router = useRouter();
  const { onLoadImage, onload } = useOnloadImage();

  const goBucketDetail = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.target as HTMLDivElement;
    if (id === 'three-dot') return;
    router.push('/bucket-detail', { scroll: false });
  };
  return (
    <ListCard bgColor='bucket' onClick={goBucketDetail}>
      <ListHeader badgeText='버킷리스트' headerText='유럽 여행가기' />
      <ListContent textColor='bucket'>
        <Image
          src='/images/home/bucket_img_step1.webp'
          width={155}
          height={155}
          alt='버킷리스트'
          title='버킷리스트 이미지'
          loading='lazy'
          onLoad={onLoadImage}
          quality={onload ? '100' : '10'}
          className='pointer-events-none h-[15.5rem] w-[15.5rem]'
        />
      </ListContent>
      <ListFooter targetAmount={2000000} currentAmount={350000} />
    </ListCard>
  );
};

export default BucketListCard;
