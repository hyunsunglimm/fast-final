'use client';

import NextIcon from '@/components/icons/NextIcon';
import FlexBox from '@/components/ui/FlexBox';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import SavingCard from '../../_components/SavingCard';
import Button from '@/components/ui/Button';

const savings = [
  {
    bank: '카카오뱅크',
    title: '26주 적금',
    description: '캐릭터와 함께 즐거운 도전',
    rate: '연 6%',
    startAmount: '5000원',
    endAmount: 1772807
  },
  {
    bank: '기업은행',
    title: 'IBK D-day 적금',
    description: '만기가 자유로운 적금',
    rate: '연 5.15%',
    startAmount: '월 20만원',
    endAmount: 1215249
  },
  {
    bank: '카카오뱅크',
    title: '굴비 적금',
    description: '부담없이 이용하는 적금',
    rate: '연 5%',
    startAmount: '월 30만원',
    endAmount: 1822207
  },
  {
    bank: '농협은행',
    title: 'NH올원e미니적금',
    description: '금액과 기간을 자유롭게',
    rate: '연 4.7%',
    startAmount: '월 50만원',
    endAmount: 3034792
  }
];

const PerfectFinancialProducts = () => {
  return (
    <div className='px-20 py-40'>
      <FlexBox justifyContent='between' alignItems='center'>
        <Text variant='h2' sizes='20' weight='600'>
          꼭 맞는 금융상품
        </Text>
        <FlexBox alignItems='center'>
          <Text sizes='12'>전체보기</Text>
          <NextIcon />
        </FlexBox>
      </FlexBox>
      <div className='mb-16 mt-20'>
        <Tab type='box' array={['예적금', '카드', '대출', '청약']} tabKey='tab' />
      </div>
      <ul className='mb-24 flex flex-col gap-[1.2rem]'>
        {savings.map((saving) => {
          return (
            <li key={saving.title}>
              <SavingCard saving={saving} />
            </li>
          );
        })}
      </ul>
      <Button size='md' styled='outline'>
        더보기
      </Button>
    </div>
  );
};

export default PerfectFinancialProducts;
