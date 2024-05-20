import MotionCarousel from '@/components/MotionCarousel';
import CircularGraphIcon from '@/components/icons/CircularGraphIcon';
import CoffeeIcon from '@/components/icons/CoffeeIcon';
import CoinIcon from '@/components/icons/CoinIcon';
import PerformanceIcon from '@/components/icons/PerformanceIcon';
import PublicTransportIcon from '@/components/icons/PublicTransportIcon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    title: '대중교통',
    icon: <PublicTransportIcon />,
    content: (
      <Text>
        대중교통{' '}
        <Text weight='700' className='text-primary'>
          5%{' '}
        </Text>
        캐시백
      </Text>
    )
  },
  {
    title: '카카오페이',
    icon: <CoinIcon />,
    content: (
      <Text>
        카카오페이{' '}
        <Text weight='700' className='text-primary'>
          7%{' '}
        </Text>
        캐시백
      </Text>
    )
  },
  {
    title: '스타벅스',
    icon: <CoffeeIcon />,
    content: (
      <Text>
        스타벅스{' '}
        <Text weight='700' className='text-primary'>
          5%{' '}
        </Text>
        캐시백
      </Text>
    )
  },
  {
    title: '전월실적',
    icon: <PerformanceIcon />,
    content: (
      <Text>
        전월실적{' '}
        <Text weight='700' className='text-primary'>
          25만원{' '}
        </Text>
        이상
      </Text>
    )
  }
];

const SpendingHabitsCards = () => {
  return (
    <div className='bg-white pt-40'>
      <Text variant='h2' sizes='20' weight='600' className='mb-[2.6rem] text-center'>
        소비습관에 맞는 카드
      </Text>
      <div className='mx-auto mb-16 flex w-[25.4rem] items-center rounded-[10rem] border border-primary bg-[#FAF7F5] px-12 py-[0.8rem]'>
        <CircularGraphIcon />
        <Text className='ml-[0.4rem]'>
          최근 소비내역중{' '}
          <Text weight='700' className='text-primary'>
            교통비
          </Text>
          가 높았어요!
        </Text>
      </div>
      <MotionCarousel className='mb-16 px-[6.05rem]'>
        <div className='mx-auto h-[16rem] w-[25.4rem] shrink-0 rounded-xs bg-[#FF7674]' />
        <div className='mx-auto h-[16rem] w-[25.4rem] shrink-0 rounded-xs bg-[#87CFDE]' />
        <div className='mx-auto h-[16rem] w-[25.4rem] shrink-0 rounded-xs bg-[#959498]' />
      </MotionCarousel>
      <FlexBox flexDirection='col' alignItems='center' className='px-20'>
        <Text sizes='12' className='mb-[0.2rem]'>
          하나은행
        </Text>
        <Text sizes='18' weight='600' className='mb-16'>
          카카오페이 CHECK
        </Text>
        <ul className='flex w-full flex-col gap-[0.6rem]'>
          {benefits.map(({ title, icon, content }) => {
            return (
              <li key={title}>
                <Card className='flex w-full items-center gap-[1.2rem] border border-gray-100 px-24 py-16'>
                  {icon}
                  {content}
                </Card>
              </li>
            );
          })}
        </ul>
      </FlexBox>
    </div>
  );
};

export default SpendingHabitsCards;
