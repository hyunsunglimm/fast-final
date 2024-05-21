import React from 'react';
import { ListCard, ListHeader, ListFooter, ListContent } from './bucket-challenge';
import Image from 'next/image';
import FlexBox from '@/components/ui/FlexBox';
const ChallengeCard = () => {
  return (
    <ListCard bgColor='challenge'>
      <ListHeader
        badgeText='챌린지'
        headerText='오늘의 나의 기분은?'
        subHeaderText='감정 통장 챌린지'
      />
      <ListContent textColor='challenge'>
        <FlexBox className='relative mt-[2.3rem] h-[13.2rem] w-[13.8rem]'>
          <Image
            src='/images/home/challenge_img.svg'
            fill
            alt='챌린지'
            title='챌린지 이미지'
            sizes='auto'
            priority
          />
        </FlexBox>
      </ListContent>
      <ListFooter targetAmount={2000000} currentAmount={350000} />
    </ListCard>
  );
};

export default ChallengeCard;
