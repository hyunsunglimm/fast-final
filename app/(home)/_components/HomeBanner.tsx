import FlexBox from '@/components/ui/FlexBox';
import React from 'react';
import MotionCarousel from '@/components/MotionCarousel';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
const HomeBanner = () => {
  return (
    <MotionCarousel showDots={false} showNumber>
      <Banner
        headText='4월 카드 이벤트'
        content={`나에게 맞는 카드 추천받고 <br/>
        최대 14만원 혜택받아요`}
        icon='/images/banner/banner-card-event.svg'
      />
      <Banner
        headText='오늘의 혜택'
        content={`날씨도 좋은데 어디가지? <br/>
        서울 양평도 구경하기`}
        icon='/images/banner/banner-today-benefits.svg'
      />
      <Banner
        headText='저축 이벤트'
        content={`겨울에 적금들고 <br/>
        내년 여름에 여행가자!`}
        icon='/images/banner/banner-saving-event.svg'
      />
    </MotionCarousel>
  );
};
export default HomeBanner;

type BannerProps = {
  headText: string;
  content: string;
  icon: string;
};

const Banner = ({ headText, content, icon }: BannerProps) => {
  return (
    <Card className='relative my-[2rem] w-full shrink-0 '>
      <FlexBox alignItems='center' justifyContent='between'>
        <FlexBox flexDirection='col' className='px-24 py-16'>
          <Text sizes='12' className='text-gray-600'>
            {headText}
          </Text>
          <Text weight='700' dangerouslySetInnerHTML={{ __html: content }}></Text>
        </FlexBox>
        <div className='relative h-[9.4rem] w-[12rem]'>
          <Image src={icon} alt={`${headText} 아이콘`} fill sizes='auto' />
        </div>
      </FlexBox>
    </Card>
  );
};
