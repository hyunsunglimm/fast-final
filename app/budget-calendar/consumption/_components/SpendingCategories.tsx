import React from 'react';
import Title from '../../_components/common/Title';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import IconDot from '../../_components/common/IconDot';

const SpendingCategories = () => {
  return (
    <div className='px-20 py-32'>
      <Title title='지출 비교' className='mb-16' />
      <Tab array={['금액', '건수']} type='box' tabKey='veiwType' />
      <ul className='relative my-40 min-h-[20.2rem]'>
        <li className='absolute left-[4.77rem] flex h-[12rem] w-[12rem] flex-col items-center justify-center rounded-full bg-[#D8F8FF]'>
          <Icon src='/icons/categories/background/categories-4.svg' alt='교통' size='48' />
          <Text className='text-gray-600'>32%</Text>
        </li>
        <li className='absolute bottom-0 left-[13.77rem] flex h-[9.6rem] w-[9.6rem] flex-col items-center justify-center rounded-full bg-[#DDF7A6]'>
          <Icon src='/icons/categories/background/categories-8.svg' alt='책' size='48' />
          <Text className='text-gray-600'>21%</Text>
        </li>
        <li className='absolute left-[17.97rem] top-[1.15rem] flex h-[7.2rem] w-[7.2rem] flex-col items-center justify-center rounded-full bg-[#FFE5E0]'>
          <Icon src='/icons/categories/background/categories-9.svg' alt='교통' size='32' />
          <Text className='text-gray-600'>14%</Text>
        </li>
        <li className='absolute right-[4.77rem] top-[8.25rem] flex h-[5.76rem] w-[5.76rem] flex-col items-center justify-center rounded-full bg-[#FFE5E0]'>
          <Icon src='/icons/categories/background/categories-10.svg' alt='교통' size='28.8' />
        </li>
        <li className='absolute bottom-[2.28rem] left-[7.203rem] flex h-[4.8rem] w-[4.8rem] flex-col items-center justify-center rounded-full bg-[#FFF4CF]'>
          <Icon src='/icons/categories/background/categories-3.svg' alt='교통' size='28.8' />
        </li>
      </ul>
      <ul className='px-16'>
        <li>
          <FlexBox justifyContent='between' className='py-8'>
            <FlexBox alignItems='center'>
              <IconDot color='blue' />
              <Text variant='h4' weight='700' className='mr-8'>
                교통
              </Text>
              <Text className='text-gray-500' sizes='12'>
                32%
              </Text>
            </FlexBox>
            <Text weight='700'>1,000,000원</Text>
          </FlexBox>
        </li>
        <li>
          <FlexBox justifyContent='between' className='py-8'>
            <FlexBox alignItems='center'>
              <IconDot color='green' />
              <Text variant='h4' weight='700' className='mr-8'>
                교육/학습
              </Text>
              <Text className='text-gray-500' sizes='12'>
                21%
              </Text>
            </FlexBox>
            <Text weight='700'>1,000,000원</Text>
          </FlexBox>
        </li>
        <li>
          <FlexBox justifyContent='between' className='py-8'>
            <FlexBox alignItems='center'>
              <IconDot color='red' />
              <Text variant='h4' weight='700' className='mr-8'>
                경조/선물
              </Text>
              <Text className='text-gray-500' sizes='12'>
                14%
              </Text>
            </FlexBox>
            <Text weight='700'>1,000,000원</Text>
          </FlexBox>
        </li>
        <li>
          <FlexBox justifyContent='between' className='py-8'>
            <FlexBox alignItems='center'>
              <IconDot color='red' />
              <Text variant='h4' weight='700' className='mr-8'>
                의료/건강
              </Text>
              <Text className='text-gray-500' sizes='12'>
                8%
              </Text>
            </FlexBox>
            <Text weight='700'>1,000,000원</Text>
          </FlexBox>
        </li>
        <li>
          <FlexBox justifyContent='between' className='py-8'>
            <FlexBox alignItems='center'>
              <IconDot color='yellow' />
              <Text variant='h4' weight='700' className='mr-8'>
                패션/뷰티/미용
              </Text>
              <Text className='text-gray-500' sizes='12'>
                7%
              </Text>
            </FlexBox>
            <Text weight='700'>1,000,000원</Text>
          </FlexBox>
        </li>
      </ul>
    </div>
  );
};

export default SpendingCategories;
