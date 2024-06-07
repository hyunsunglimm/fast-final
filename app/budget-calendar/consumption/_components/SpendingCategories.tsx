'use client';

import Title from '../../_components/common/Title';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import Icon, { IconProps } from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import IconDot, { dotVariants } from '../../_components/common/IconDot';
import { VariantProps } from 'class-variance-authority';
import useDefaultParam from '@/shared/hooks/useDefaultParam';

type SpendingData = {
  id: string;
  name: string;
  percentage: string;
  amount: string;
  dotColor: Exclude<VariantProps<typeof dotVariants>['color'], null>;
  position: string;
  size: string;
  color: string;
  icon: string;
  iconSize?: IconProps['size'];
};

const spendingData: SpendingData[] = [
  {
    id: '1',
    name: '교통',
    percentage: '32%',
    amount: '1,000,000원',
    dotColor: 'blue',
    position: 'left-[4.77rem]',
    size: '12rem',
    color: '#D8F8FF',
    icon: '/icons/categories/background/categories-4.svg',
    iconSize: '48'
  },
  {
    id: '2',
    name: '교육/학습',
    percentage: '21%',
    amount: '1,000,000원',
    dotColor: 'green',
    position: 'left-[13.77rem] bottom-0',
    size: '9.6rem',
    color: '#DDF7A6',
    icon: '/icons/categories/background/categories-8.svg',
    iconSize: '48'
  },
  {
    id: '3',
    name: '경조/선물',
    percentage: '14%',
    amount: '1,000,000원',
    dotColor: 'red',
    position: 'left-[17.97rem] top-[1.15rem]',
    size: '7.2rem',
    color: '#FFE5E0',
    icon: '/icons/categories/background/categories-9.svg',
    iconSize: '32'
  },
  {
    id: '4',
    name: '의료/건강',
    percentage: '8%',
    amount: '1,000,000원',
    dotColor: 'red',
    position: 'right-[4.77rem] top-[8.25rem]',
    size: '5.76rem',
    color: '#FFE5E0',
    icon: '/icons/categories/background/categories-10.svg',
    iconSize: '28.8'
  },
  {
    id: '5',
    name: '패션/뷰티/미용',
    percentage: '7%',
    amount: '1,000,000원',
    dotColor: 'yellow',
    position: 'left-[7.203rem] bottom-[2.28rem]',
    size: '4.8rem',
    color: '#FFF4CF',
    icon: '/icons/categories/background/categories-3.svg',
    iconSize: '28.8'
  }
];
type Config = {
  size: string;
  color: string;
};
const classConfig: Record<string, Config> = {
  '1': { size: 'w-[12rem]', color: 'bg-[#D8F8FF]' },
  '2': { size: 'w-[9.6rem]', color: 'bg-[#DDF7A6]' },
  '3': { size: 'w-[7.2rem]', color: 'bg-[#FFE5E0]' },
  '4': { size: 'w-[5.76rem]', color: 'bg-[#FFE5E0]' },
  '5': { size: 'w-[4.8rem]', color: 'bg-[#FFF4CF]' }
};
const SpendingCategories = () => {
  // tab 기본값 설정
  useDefaultParam('viewType', '금액');

  return (
    <div className='px-20 py-32'>
      <Title title='지출 비교' className='mb-16' />
      <Tab array={['금액', '건수']} type='box' tabKey='viewType' />
      <div className='relative my-40 min-h-[20.2rem]'>
        {spendingData.map((item, index) => {
          const sizeClass = `${classConfig[item.id].size}`;
          const bgColor = `${classConfig[item.id].color}`;
          return (
            <FlexBox
              key={index}
              flexDirection='col'
              alignItems='center'
              justifyContent='center'
              className={`absolute ${item.position} rounded-full ${sizeClass} ${bgColor} aspect-square`}
            >
              <Icon src={item.icon} alt={item.name} size={item.iconSize} />
              {index < 3 && <Text className='text-gray-600'>{item.percentage}</Text>}
            </FlexBox>
          );
        })}
      </div>
      <ul className='px-16'>
        {spendingData.map((item, index) => {
          return (
            <li key={index}>
              <FlexBox justifyContent='between' className='py-8'>
                <FlexBox alignItems='center'>
                  <IconDot color={item.dotColor} />
                  <Text variant='h4' weight='700' className='mr-8'>
                    {item.name}
                  </Text>
                  <Text className='text-gray-500' sizes='12'>
                    {item.percentage}
                  </Text>
                </FlexBox>
                <Text weight='700'>{item.amount}</Text>
              </FlexBox>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SpendingCategories;
