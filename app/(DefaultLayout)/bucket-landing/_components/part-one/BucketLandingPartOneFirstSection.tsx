import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import React from 'react';

const BucketLandingPartOneFirstSection = () => {
  return (
    <section className='bg-white pb-40'>
      <Image
        src='/images/bucket-landing/part1-main.webp'
        alt='버킷리스트 랜딩페이지 저축생활 1편 메인 이미지'
        width={500}
        height={438}
        className='w-full'
        priority
      />
      <FlexBox flexDirection='col' alignItems='center' className='pt-[6.4rem]'>
        <Image
          src='/images/bucket-landing/part1-speech-bubble-1.webp'
          alt='말풍선 이미지 1'
          width={200}
          height={30}
          className='mb-24 w-[4.6rem]'
        />
        <Text sizes='28' weight='800' className='text-gray-500'>
          내가 만드는
        </Text>
        <Text sizes='28' weight='800' className='mb-20'>
          나만의 버킷리스트
        </Text>
        <Text weight='500'>돈을 모을 수 있는 목표와</Text>
        <Text weight='500'>목표 금액을 설정해요</Text>
        <Image
          src='/images/bucket-landing/travel-to-europe.webp'
          alt='유럽 여행가기 카드'
          width={400}
          height={124}
          className='mb-16 mt-28 w-[30rem]'
        />
        <Image
          src='/images/bucket-landing/parents-gift.webp'
          alt='부모님 선물사기 카드'
          width={400}
          height={124}
          className='w-[30rem]'
        />
      </FlexBox>
    </section>
  );
};

export default BucketLandingPartOneFirstSection;
