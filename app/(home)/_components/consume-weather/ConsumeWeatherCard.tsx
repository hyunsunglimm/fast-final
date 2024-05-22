'use client';
import { Card, CardContent } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { MouseEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type ConsumeWeatherCardProps = {
  weatherId: number;
};

type WeatherConfigType = {
  [key: number]: {
    imagePath: string;
    text: string;
  };
};

const weatherConfig: WeatherConfigType = {
  1: {
    imagePath: '/images/home/weather/weather-1.svg',
    text: '무지출이 떴어요!'
  },
  2: {
    imagePath: '/images/home/weather/weather-2.svg',
    text: '지출 구름이 꼈어요!'
  },
  3: {
    imagePath: '/images/home/weather/weather-3.svg',
    text: '지출 하늘이 맑아요!'
  },
  4: {
    imagePath: '/images/home/weather/weather-4.svg',
    text: '지출 비가 내려요!'
  },
  5: {
    imagePath: '/images/home/weather/weather-5.svg',
    text: '지출 번개가 쳐요!'
  }
};
const ConsumeWeatherCard = ({ weatherId }: ConsumeWeatherCardProps) => {
  const [mouseCoord, setMouseCoord] = useState(0);
  const router = useRouter();
  const weather = weatherConfig[weatherId];

  const mouseDownCoords = (e: MouseEvent<HTMLDivElement>) => {
    setMouseCoord(e.clientX);
  };
  const goToBudget = (e: MouseEvent<HTMLDivElement>) => {
    const mouseUp = e.clientX;
    if (mouseUp < mouseCoord + 2 && mouseUp > mouseCoord - 2) {
      router.push('/budget-calendar');
    }
  };
  return (
    <Card
      role='button'
      aria-label='가계부로 이동'
      tabIndex={0}
      onMouseDown={mouseDownCoords}
      onMouseUp={goToBudget}
      className='mt-[1.2rem] w-[32rem] shrink-0'
    >
      <CardContent className='gap-x-[1.6rem] px-[2rem] py-[2.4rem]' alignItems='center'>
        <FlexBox className='relative h-[10rem] w-[6.8rem]'>
          <Image
            src={weather.imagePath}
            alt={`${weather.text} 아이콘`}
            fill
            sizes='auto'
            className='pointer-events-none'
          />
        </FlexBox>
        {/* {weather.icon} */}
        <FlexBox flexDirection='col'>
          <Text>오늘 소비 날씨는</Text>
          <Text sizes='18' weight='500'>
            {weather.text}
          </Text>
          <Text sizes='12' className='text-gray-500'>
            예산보다{' '}
            <Text weight='700' className='text-orange-500'>
              1,000,000원
            </Text>{' '}
            더 썼어요.
          </Text>
        </FlexBox>
      </CardContent>
    </Card>
  );
};

export default ConsumeWeatherCard;

// const consumeCaseText = (id: number) => {
//   switch (id) {
//     case 1:
//       return '무지출이 떴어요!';
//     case 2:
//       return '지출 구름이 꼈어요!';
//     case 3:
//       return '지출 하늘이 맑아요!';
//     case 4:
//       return '지출 비가 내려요!';
//     case 5:
//       return '지출 번개가 쳐요!';
//   }
// };
// const renderWeatherIcon = (id: number) => {
//   switch (id) {
//     case 1:
//       return <WeatherOne />;
//     case 2:
//       return <WeatherTwo />;
//     case 3:
//       return <WeatherThree />;
//     case 4:
//       return <WeatherFour />;
//     case 5:
//       return <WeatherFive />;
//   }
// };
