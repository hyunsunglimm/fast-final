import React from 'react';
import { ListCard, ListHeader, ListFooter, ListContent } from './bucket-challenge';
import Image from 'next/image';

const BucketListCard = () => {
  return (
    <ListCard bgColor='bucket'>
      <ListHeader badgeText='버킷리스트' headerText='유럽 여행가기' />
      <ListContent textColor='bucket'>
        <div className='relative h-[15.5rem] w-[15.5rem]'>
          <Image
            src='/images/home/bucket_img_step1.svg'
            fill
            alt='버킷리스트'
            title='버킷리스트 이미지'
            sizes='auto'
            priority
            className='pointer-events-none'
          />
        </div>
      </ListContent>
      <ListFooter targetAmount={2000000} currentAmount={350000} />
    </ListCard>
  );
};

export default BucketListCard;
