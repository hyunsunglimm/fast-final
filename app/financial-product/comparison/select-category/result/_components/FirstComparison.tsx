import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import ResultCard from './ResultCard';

const resultCardInfo = [
  {
    title: '카드 A',
    imgPath: '/images/financial-product/kakao-shinhan-time.png',
    categories: '시내버스, 지하철, 택시',
    benefits: ['10% 할인', '15% 할인']
  },
  {
    title: '카드 B',
    imgPath: '/images/financial-product/shinhan-mrlife.png',
    categories: '시내버스, 지하철',
    benefits: ['건별 200월 할인', '월 최대 5천원']
  }
];

const FirstComparison = () => {
  return (
    <section className='mt-12 bg-white px-20 py-40'>
      <Text variant='p' weight='500' className='mb-[0.8rem] text-gray-700'>
        대중교통
      </Text>
      <Text sizes='20' weight='700'>
        카드 A를 사용하면
        <br />{' '}
        <Text sizes='20' weight='700' className='text-active'>
          월 5천원
        </Text>
        을 더 아낄 수 있어요
      </Text>
      <FlexBox justifyContent='center' className='my-28 gap-[4rem]' alignItems='end'>
        <FlexBox flexDirection='col' className='gap-16'>
          <div className='h-[12.6rem] w-[6.4rem] rounded-md bg-gradient-to-t from-[#5A7EFF] to-[#819CFF]' />
          <Text sizes='12' weight='700'>
            월 최대 1만원
          </Text>
        </FlexBox>
        <FlexBox flexDirection='col' className='gap-16'>
          <div className='h-[9.5rem] w-[6.4rem] rounded-md bg-gradient-to-t from-[#FF5C46] to-[#FF8675]' />
          <Text sizes='12' weight='700'>
            월 최대 5천원
          </Text>
        </FlexBox>
      </FlexBox>
      <Text sizes='16' weight='500'>
        혜택 비교
      </Text>
      <FlexBox flexDirection='col' className='gap-12'>
        {resultCardInfo.map((cardInfo) => (
          <ResultCard key={cardInfo.title} cardInfo={cardInfo} />
        ))}
      </FlexBox>
    </section>
  );
};

export default FirstComparison;
