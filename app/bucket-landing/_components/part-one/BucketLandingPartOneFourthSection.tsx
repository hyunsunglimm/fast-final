import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import React from 'react';

const BucketLandingPartOneFourthSection = () => {
  return (
    <section className='bg-gray-50 pb-[6.4rem]'>
      <FlexBox flexDirection='col' alignItems='center' className='pt-[6.4rem]'>
        <Image
          src='/images/bucket-landing/speech-bubble-4.webp'
          alt='말풍선 이미지 4'
          width={200}
          height={30}
          className='mb-24 w-[4.6rem]'
        />
        <Text sizes='28' weight='800' className='text-gray-500'>
          단순 저축으로만 어렵다면
        </Text>
        <Text sizes='28' weight='800' className='mb-20'>
          다른 금융상품도 연결
        </Text>
        <Text weight='500'>기존에 이용중인 적금 상품을 연결하여</Text>
        <Text weight='500'>버킷리스트를 쉽게 달성할 수 있어요</Text>
        <Image
          src='/images/bucket-landing/select-product.webp'
          alt='상품 선택'
          width={400}
          height={46}
          className='mt-40 w-[30rem]'
        />
      </FlexBox>
    </section>
  );
};

export default BucketLandingPartOneFourthSection;
