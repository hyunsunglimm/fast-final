import React from 'react';
import Text from '@/components/ui/Text';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';

const data = [
  { label: '하루 평균', value: '60,000원' },
  { label: '후회한 돈', value: '1,000,000원' },
  { label: '무지출', value: '10일' }
];

const MonthlyOverview = () => {
  return (
    <section className='px-20 py-32'>
      <div className='rounded-consumption bg-[#FFEDE1] px-24 pb-32 pt-40 text-center'>
        <Text
          variant='h2'
          sizes='12'
          weight='700'
          className='mb-8 inline-block rounded-xs bg-primary px-12 py-4 text-white'
        >
          이번 달 목표
        </Text>
        <FlexBox alignItems='center' justifyContent='center' className='gap-4'>
          <Text sizes='20' weight='700'>
            600,000원
          </Text>
          <Text>/ 1,000,000원</Text>
          <Icon src='/icons/system-icon/info.svg' alt='정보' size='16' />
        </FlexBox>
        <Icon
          src='/icons/weather/consumption/weather-3.svg'
          alt='구름'
          className='my-16 h-[16rem] w-[16rem] rounded-none'
        />
        <FlexBox justifyContent='between'>
          {data.map((item, index) => {
            return (
              <div className='min-w-[8.5rem]' key={index}>
                <Text variant='p' className='mb-8 opacity-40'>
                  {item.label}
                </Text>
                <Text variant='p' weight='700'>
                  {item.value}
                </Text>
              </div>
            );
          })}
        </FlexBox>
      </div>
    </section>
  );
};

export default MonthlyOverview;
