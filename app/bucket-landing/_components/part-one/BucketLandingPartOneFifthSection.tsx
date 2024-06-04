import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import React from 'react';
import NextButton from '../NextButton';

const BucketLandingPartOneFifthSection = () => {
  return (
    <section className='bg-white pb-[6.4rem]'>
      <FlexBox flexDirection='col' alignItems='center' className='pt-[6.4rem]'>
        <Image
          src='/images/bucket-landing/part1-last-speech-bubble.webp'
          alt='마지막 말풍선 이미지'
          width={200}
          height={30}
          className='mb-24 w-[4.6rem]'
        />
        <Text sizes='28' weight='800' className='text-gray-500'>
          저축하고 상품받고
        </Text>
        <Text sizes='28' weight='800' className='mb-20'>
          다양한 혜택을 누려보세요!
        </Text>
        <Text weight='500'>목표금액의 일정 금액 달성시</Text>
        <Text weight='500'>포인트부터 기프티콘 혜택을 받을 수 있어요</Text>
        <Image
          src='/images/bucket-landing/porko-gift.webp'
          alt='porko 선물 이미지'
          width={500}
          height={242}
          className='mb-[4.8rem] mt-40 w-[26.5rem]'
        />
        <FlexBox flexDirection='col' className='w-full gap-12 px-24'>
          <NextButton href='/create-bucket' backgroundColor='#5A7EFF'>
            버킷리스트 시작하기
          </NextButton>
          <NextButton href='/not-found'>친구에게 알려주기</NextButton>
        </FlexBox>
      </FlexBox>
    </section>
  );
};

export default BucketLandingPartOneFifthSection;
