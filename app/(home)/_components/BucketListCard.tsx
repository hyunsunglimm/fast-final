import React from 'react';
import { ListCard, ListHeader, ListFooter, ListContent } from './bucket-challenge';
import Image from 'next/image';

const BucketListCard = () => {
  return (
    <ListCard bgColor='bucket'>
      <ListHeader badgeText='버킷리스트' headerText='유럽 여행가기' />
      <ListContent textColor='bucket'>
        <Image
          src='/images/home/bucket_img_step1.svg'
          width={155}
          height={155}
          alt='버킷리스트'
          title='버킷리스트 이미지'
          priority
          className='pointer-events-none h-[15.5rem] w-[15.5rem]'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAL0lEQVR42u3NMQEAAAgDIJfcNPY0g4cfFCDT9S4SiUQikUgkEolEIpFIJBKJ5GYBnpg5OxOuJSoAAAAASUVORK5CYII='
        />
      </ListContent>
      <ListFooter targetAmount={2000000} currentAmount={350000} />
    </ListCard>
  );
};

export default BucketListCard;
