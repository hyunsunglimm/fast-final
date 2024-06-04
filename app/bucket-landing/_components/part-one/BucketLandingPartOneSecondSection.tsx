import SwiperWrapper from '@/components/SwiperWrapper';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import React from 'react';

const BucketLandingPartOneSecondSection = () => {
  return (
    <section className='bg-gray-50 pb-[6.4rem]'>
      <FlexBox flexDirection='col' alignItems='center' className='pt-[6.4rem]'>
        <Image
          src='/images/bucket-landing/part1-speech-bubble-2.webp'
          alt='말풍선 이미지 2'
          width={200}
          height={30}
          className='mb-24 w-[4.6rem]'
        />
        <Text sizes='28' weight='800' className='text-gray-500'>
          저축을 위해
        </Text>
        <Text sizes='28' weight='800' className='mb-40'>
          내 계좌 연결이 필요해요
        </Text>
      </FlexBox>

      {/* 명로님과 상의 (가운데 정렬) */}
      <SwiperWrapper dots>
        <Image
          src='/images/bucket-landing/part1-slide-1.webp'
          alt='계좌 연결 슬라이드 1'
          width={1000}
          height={380}
          className='h-[38rem]'
        />
        <Image
          src='/images/bucket-landing/part1-slide-2.webp'
          alt='계좌 연결 슬라이드 2'
          width={1000}
          height={380}
          className='h-[38rem]'
        />
      </SwiperWrapper>
    </section>
  );
};

export default BucketLandingPartOneSecondSection;
