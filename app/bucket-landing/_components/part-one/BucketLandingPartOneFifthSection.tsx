import BottomButton from '@/app/financial-product/comparison/_components/BottomButton';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import React from 'react';

const BucketLandingPartOneFifthSection = () => {
  return (
    <section className='bg-white pb-[13.9rem]'>
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
        <Text sizes='16' weight='600'>
          친구에게 알려주기
        </Text>
        <FlexBox className='mt-20 gap-[2.2rem]'>
          <Icon src='/icons/bucket-landing/facebook.svg' alt='페이스북 공유' size='60' />
          <Icon src='/icons/bucket-landing/kakao-talk.svg' alt='카카오톡 공유' size='60' />
          <Icon src='/icons/bucket-landing/url.svg' alt='링크 공유' size='60' />
        </FlexBox>
      </FlexBox>
      <BottomButton styled='fill_blue' path='/create-bucket'>
        <Text sizes='16' weight='600'>
          버킷리스트 생성하기
        </Text>
      </BottomButton>
    </section>
  );
};

export default BucketLandingPartOneFifthSection;
