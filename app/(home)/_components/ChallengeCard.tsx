import React from 'react';
import { ListCard, ListHeader, ListFooter, ListContent } from './bucket-challenge';

const ChallengeCard = () => {
  return (
    <ListCard>
      <ListHeader
        badgeText='챌린지'
        headerText='오늘의 나의 기분은?'
        subHeaderText='감정 통장 챌린지'
      />
      <ListContent altText='챌린지' imagePath='/images/home-bucket-rabbit.png' />
      <ListFooter targetAmount={2000000} currentAmount={350000} />
    </ListCard>
  );
};

export default ChallengeCard;
