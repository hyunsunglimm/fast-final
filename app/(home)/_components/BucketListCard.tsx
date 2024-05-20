import React from 'react';
import { ListCard, ListHeader, ListFooter, ListContent } from './bucket-challenge';

const BucketListCard = () => {
  return (
    <ListCard isChallenge={false}>
      <ListHeader isChallenge={false} badgeText='버킷리스트' headerText='유럽 여행가기' />
      <ListContent
        altText='버킷리스트'
        imagePath='/images/home-bucket-rabbit.png'
        isChallenge={false}
      />
      <ListFooter targetAmount={2000000} currentAmount={350000} />
    </ListCard>
  );
};

export default BucketListCard;
