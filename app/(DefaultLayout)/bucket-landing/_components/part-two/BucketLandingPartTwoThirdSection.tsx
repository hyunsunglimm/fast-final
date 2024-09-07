'use client';

import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import React, { useState } from 'react';
import BucketLandingNextButton from '../BucketLandingNextButton';
import BucketLandingPopup from '../BucketLandingPopup';
import { useRouter } from 'next/navigation';

const BucketLandingPartTwoThirdSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const onClose = () => {
    setIsOpen(false);
  };

  const createMyRuleHandler = () => {
    // 버킷리스트가 있으면 router.push('/create-bucket')
    // 버킷리스트가 없으면 setIsOpen(true);
    setIsOpen(true);
  };
  return (
    <section className='bg-white pb-[6.4rem]'>
      <FlexBox flexDirection='col' alignItems='center' className='pt-[6.4rem]'>
        <Image
          src='/images/bucket-landing/last-part2-speech-bubble.webp'
          alt='말풍선 이미지 1'
          width={200}
          height={30}
          className='mb-24 w-[4.6rem]'
        />
        <Text sizes='28' weight='800' className='text-gray-500'>
          포코와 함께
        </Text>
        <Text sizes='28' weight='800'>
          저축습관을 만들어봐요
        </Text>
        <Image
          src='/images/bucket-landing/money-pick-porko.webp'
          alt='돈 고르는 포코'
          width={400}
          height={144}
          className='mb-32 mt-40 w-[13.1rem]'
        />
        <FlexBox flexDirection='col' className='w-full gap-12 px-24'>
          <BucketLandingNextButton onClick={createMyRuleHandler} backgroundColor='#FF7822'>
            나만의 규칙 생성하기
          </BucketLandingNextButton>
          <BucketLandingNextButton onClick={() => router.push('/not-found')}>
            친구에게 알려주기
          </BucketLandingNextButton>
        </FlexBox>
      </FlexBox>
      <BucketLandingPopup isOpen={isOpen} onClose={onClose} />
    </section>
  );
};

export default BucketLandingPartTwoThirdSection;
