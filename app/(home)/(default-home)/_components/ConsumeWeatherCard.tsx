import { CardContent, cardVariants } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import Link from 'next/link';

type WeatherConfigType = {
  [key: number]: {
    imagePath: string;
    text: string;
  };
};

const DUMMY_DATA = [
  {
    date: '2024-05-15',
    usedCost: 50000, // 소비 금액
    weatherId: 1, // 일별 날씨 ID
    reaction: false // 반응 존재 여부
  },
  {
    date: '2024-05-17',
    usedCost: 200000, // 소비 금액
    weatherId: 3, // 일별 날씨 ID
    reaction: false // 반응 존재 여부
  },
  {
    date: '2024-05-19',
    usedCost: 500000, // 소비 금액
    weatherId: 4, // 일별 날씨 ID
    reaction: false // 반응 존재 여부
  }
];

const today = new Date().getDate();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterdayDate = yesterday.getDate();

const filteredData = DUMMY_DATA.filter((item) => {
  const itemDate = new Date(item.date).getDate();
  return itemDate >= yesterdayDate && itemDate <= today;
});

if (filteredData.length === 0) {
  filteredData.push({
    date: yesterday.toISOString().split('T')[0],
    usedCost: 0,
    weatherId: 1,
    reaction: false
  });
}
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
const ConsumeWeatherCard = () => {
  return (
    <Link
      href='/budget-calendar'
      aria-label='가계부로 이동'
      tabIndex={0}
      className={cardVariants({ className: 'mb-16 block w-full p-24' })}
    >
      <CardContent alignItems='center' className='gap-x-20'>
        <FlexBox className='relative h-[12.589rem] w-[8.2rem]'>
          <Image
            src={weatherConfig[1].imagePath}
            alt={`${weatherConfig[1].text} 아이콘`}
            fill
            sizes='auto'
            className='pointer-events-none'
          />
        </FlexBox>

        <FlexBox flexDirection='col'>
          <Text className='mb-[0.2rem]'>오늘 소비 날씨는</Text>
          <Text sizes='16' weight='700' className='mb-[0.8rem]'>
            {weatherConfig[1].text}
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
    </Link>
  );
};

export default ConsumeWeatherCard;
