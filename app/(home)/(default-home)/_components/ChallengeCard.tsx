import React from 'react';
import { ListCard, ListHeader, ListFooter, ListContent } from './bucket-challenge';
import Image from 'next/image';

const ChallengeCard = () => {
  return (
    <ListCard bgColor='challenge'>
      <ListHeader
        badgeText='챌린지'
        headerText='오늘의 나의 기분은?'
        subHeaderText='감정 통장 챌린지'
      />
      <ListContent textColor='challenge'>
        <Image
          src='/images/home/challenge_img.webp'
          width={138}
          height={132}
          alt='챌린지'
          title='챌린지 이미지'
          loading='lazy'
          className='pointer-events-none mt-[2.3rem] h-[13.2rem] w-[13.8rem]'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAL0lEQVR42u3NMQEAAAgDIJfcNPY0g4cfFCDT9S4SiUQikUgkEolEIpFIJBKJ5GYBnpg5OxOuJSoAAAAASUVORK5CYII='
        />
      </ListContent>
      <ListFooter targetAmount={2000000} currentAmount={350000} />
    </ListCard>
  );
};

export default ChallengeCard;
