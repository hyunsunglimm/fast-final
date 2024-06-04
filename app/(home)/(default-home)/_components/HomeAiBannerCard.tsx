import FlexBox from '@/components/ui/FlexBox';
import { Card } from '@/components/ui/card';
import React from 'react';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import Link from 'next/link';

const HomeAiBannerCard = () => {
  return (
    <Link href='/financial-product/ai-recommendations?tab=카드&callbackUrl=/'>
      <Card className='relative flex h-[13.4rem] justify-between overflow-hidden bg-[#79624D] p-24'>
        <FlexBox flexDirection='col' justifyContent='center' className='h-full gap-y-10 text-white'>
          <Text sizes='12' weight='500'>
            AI맞춤 추천
          </Text>
          <Text sizes='18' weight='700'>
            꼭 맞는 금융 상품 <br />
            여기 있어요!
          </Text>
        </FlexBox>
        <div className='absolute bottom-0 right-[3.2rem] h-[13.1rem] w-[9.5rem]'>
          <Image
            src='/images/home/ai-banner.webp'
            alt='AI 맞춤 추천 이미지'
            fill
            sizes='auto'
            loading='lazy'
            className='object-contain object-bottom'
          />
        </div>
      </Card>
    </Link>
  );
};

export default HomeAiBannerCard;
