'use client';

import FlexBox from '@/components/ui/FlexBox';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import SpotlightCardItem from './SpotlightCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/Icon';

const spotlightCards = [
  {
    title: '카카오뱅크 신한카드 Time',
    annualBenefits: 100602,
    annualFee: '연회비 1만원',
    image: 'kakao-shinhan-time',
    isEvent: false
  },
  {
    title: '신한카드 Mr.Life',
    annualBenefits: 91162,
    annualFee: '연회비 1만 5천원',
    image: 'shinhan-mrlife',
    isEvent: false
  },
  {
    title: '카카오페이 신한 라이언',
    annualBenefits: 80000,
    annualFee: '연회비 이벤트',
    image: 'kakao-shinhan-lion',
    isEvent: true
  },
  {
    title: 'BC 바로 클리어 플러스',
    annualBenefits: 71165,
    annualFee: '연회비 1만원',
    image: 'bc-clear-plus',
    isEvent: false
  },
  {
    title: 'BC 바로 클리어',
    annualBenefits: 56428,
    annualFee: '연회비 이벤트',
    image: 'balance',
    isEvent: true
  }
];

const SpotlightCardSection = () => {
  return (
    <section>
      <FlexBox alignItems='center'>
        <Text
          sizes='20'
          className='mr-[0.8rem] border-b-[1px] border-black opacity-40'
          weight='700'
        >
          20대
        </Text>
        <Icon src='/icons/system-icon/arrow/arrow-down.svg' alt='drop down' size='16' />
        <Text sizes='20' variant='h1' weight='700' className='ml-[1.4rem]'>
          주목받는 카드
        </Text>
      </FlexBox>
      <div className='mb-24 mt-16'>
        <Tab array={['신용카드', '체크카드']} type='box' tabKey='tab' />
      </div>
      <ul className='mb-24 flex flex-col gap-[1.2rem]'>
        {spotlightCards.map((card, index) => {
          return (
            <li key={card.title}>
              <SpotlightCardItem card={card} count={index + 1} />
            </li>
          );
        })}
      </ul>
      <Button size='md' styled='outline'>
        더보기
      </Button>
    </section>
  );
};

export default SpotlightCardSection;
