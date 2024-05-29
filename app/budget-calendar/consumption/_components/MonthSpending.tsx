import React from 'react';
import Text from '@/components/ui/Text';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';

const spendingData = [
  {
    iconSrc: '/icons/categories/background/categories-19.svg',
    alt: '지난 달보다 더 썼어요',
    text: '지난 달보다 ',
    highlight: '1,000,000원',
    suffix: ' 더 썼어요'
  },
  {
    iconSrc: '/icons/categories/background/categories-17.svg',
    alt: '주 평균 소비',
    text: '주 평균 ',
    highlight: '1,000,000원',
    suffix: '을 써요'
  },
  {
    iconSrc: '/icons/categories/background/categories-2.svg',
    alt: '주거생활 소비',
    text: '',
    highlight: '주거생활',
    suffix: '에 가장 많이 돈을 써요'
  },
  {
    iconSrc: '/icons/categories/background/categories-24.svg',
    alt: '지출 비가 오는 날',
    text: '',
    highlight: '지출 비가 오는 날이',
    suffix: ' 가장 많아요'
  }
];

const MonthSpending = () => {
  return (
    <div className='px-20 py-32'>
      <Text variant='h2' sizes='18' weight='700' className='mb-24'>
        ㅇㅇㅇ님의
        <br />
        이번 달 소비는?
      </Text>
      <ul>
        {spendingData.map((item, index) => {
          return (
            <li className='mt-16' key={index}>
              <FlexBox alignItems='center' className='rounded-sm bg-gray-10 p-16'>
                <Icon src={item.iconSrc} alt={item.alt} size='32' className='mr-12' />
                <Text variant='p'>
                  {item.text}
                  <span className='font-700'>{item.highlight}</span>
                  {item.suffix}
                </Text>
              </FlexBox>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MonthSpending;
