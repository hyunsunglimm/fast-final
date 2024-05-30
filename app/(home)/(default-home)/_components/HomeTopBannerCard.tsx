import FlexBox from '@/components/ui/FlexBox';
import React from 'react';

import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import SwiperWrapper from '@/components/SwiperWrapper';

const HomeTopBannerCard = () => {
  return (
    <SwiperWrapper fraction>
      <Banner
        headText='4월 카드 이벤트'
        content={`나에게 맞는 카드 추천받고 <br/>
        최대 14만원 혜택받아요`}
        icon='/images/home/banner/banner-card-event.svg'
      />
      <Banner
        headText='오늘의 혜택'
        content={`날씨도 좋은데 어디가지? <br/>
        서울 양평도 구경하기`}
        icon='/images/home/banner/banner-today-benefits.svg'
      />
      <Banner
        headText='저축 이벤트'
        content={`겨울에 적금들고 <br/>
        내년 여름에 여행가자!`}
        icon='/images/home/banner/banner-saving-event.svg'
      />
    </SwiperWrapper>
  );
};
export default HomeTopBannerCard;

type BannerProps = {
  headText: string;
  content: string;
  icon: string;
};

const Banner = ({ headText, content, icon }: BannerProps) => {
  return (
    <Card className='relative w-full '>
      <FlexBox alignItems='center' justifyContent='between'>
        <FlexBox flexDirection='col' className='px-24 py-16 pr-0'>
          <Text weight='500' sizes='12' className='mb-[0.4rem] text-gray-600'>
            {headText}
          </Text>
          <Text
            weight='700'
            className='tracking-tight'
            dangerouslySetInnerHTML={{ __html: content }}
          ></Text>
        </FlexBox>

        <Image
          src={icon}
          alt={`${headText} 아이콘`}
          width={120}
          height={94}
          priority
          quality='90'
          className='pointer-events-none '
        />
      </FlexBox>
    </Card>
  );
};
