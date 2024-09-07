import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import React from 'react';

const BucketLandingPartOneThirdSection = () => {
  return (
    <section className='bg-white pb-[6.4rem]'>
      <FlexBox flexDirection='col' alignItems='center' className='pt-[6.4rem]'>
        <Image
          src='/images/bucket-landing/part1-speech-bubble-3.webp'
          alt='말풍선 이미지 3'
          width={200}
          height={30}
          className='mb-24 w-[4.6rem]'
        />
        <Text sizes='28' weight='800' className='text-gray-500'>
          매주 저축하여
        </Text>
        <Text sizes='28' weight='800' className='mb-20'>
          버킷리스트 달성
        </Text>
        <Text weight='500'>요일과 매주 저축할 금액을 설정하고</Text>
        <Text weight='500'>간편하게 예약송금 하세요</Text>
        <Image
          src='/images/bucket-landing/days.webp'
          alt='요일 이미지'
          width={500}
          height={72}
          className='mb-32 mt-40 h-[7.2rem] w-full'
        />
        <Image
          src='/images/bucket-landing/2-week-saving.webp'
          alt='2주차 저축'
          width={500}
          height={82}
          className='mb-16 w-[33.5rem]'
        />
        <Image
          src='/images/bucket-landing/1-week-saving.webp'
          alt='1주차 저축'
          width={500}
          height={82}
          className='w-[33.5rem]'
        />
      </FlexBox>
    </section>
  );
};

export default BucketLandingPartOneThirdSection;
