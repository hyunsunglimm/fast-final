import Icon from '@/components/Icon';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import Image from 'next/image';

const cardCompanies = [
  { title: '신한', iconPath: '/icons/logos/card/card-shinhan.svg' },
  { title: '현대', iconPath: '/icons/logos/card/card-hyundai.svg' },
  { title: '비씨', iconPath: '/icons/logos/card/card-bc.svg' }
];

const filterings = ['대중교통', '카페'];

const FilteringSection = () => {
  return (
    <div className='mb-40 bg-white'>
      <Tab type='underline' array={['예적금', '대출', '카드', '보험']} tabKey='tab1' />
      <div className='border-b border-gray-100 px-20 py-16'>
        <Tab type='box' array={['신용카드', '체크카드']} tabKey='tab2' />
      </div>

      <div className='flex items-center border-b border-gray-100 px-20 py-16'>
        <div className='relative flex gap-[0.6rem] rounded-xs border border-gray-200 px-[1rem] py-[0.7rem]'>
          <Image
            src='/icons/financial-product/filter-icon.svg'
            alt='filter icon'
            width={16}
            height={16}
            className='w-[1.6rem]'
          />
          <Text sizes='12' weight='700' className='text-primary'>
            카드사
          </Text>
          <Text
            sizes='10'
            weight='500'
            className='absolute right-[-0.6rem] top-[-0.5rem] flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full bg-primary text-white'
          >
            3
          </Text>
        </div>
        <div className='mx-16 h-[2.6rem] w-[0.1rem] border border-gray-200' />
        <ul className='flex gap-[1.6rem]'>
          {cardCompanies.map(({ title, iconPath }) => {
            return (
              <li key={title}>
                <Icon src={iconPath} alt={title} size='32' />
              </li>
            );
          })}
        </ul>
      </div>

      <div className='flex items-center px-20 py-16'>
        <div className='relative flex gap-[0.6rem] rounded-xs border border-gray-200 px-[1rem] py-[0.7rem]'>
          <Image
            src='/icons/financial-product/filter-icon.svg'
            alt='filter icon'
            width={16}
            height={16}
            className='w-[1.6rem]'
          />
          <Text sizes='12' weight='700' className='text-primary'>
            필터링
          </Text>
          <Text
            sizes='10'
            weight='500'
            className='absolute right-[-0.6rem] top-[-0.5rem] flex h-[1.6rem] w-[1.6rem] items-center justify-center rounded-full bg-primary text-white'
          >
            2
          </Text>
        </div>
        <div className='mx-16 h-[2.6rem] w-[0.1rem] border border-gray-200' />
        <ul className='flex gap-[0.8rem]'>
          {filterings.map((filter) => {
            return (
              <li
                key={filter}
                className='flex gap-[0.4rem] rounded-xs bg-primary py-[0.7rem] pl-[1.2rem] pr-[0.8rem] text-white'
              >
                <Text sizes='12' weight='600'>
                  {filter}
                </Text>
                <Image
                  src='/icons/financial-product/close-icon.svg'
                  alt='close icon'
                  width={16}
                  height={16}
                  className='w-[1.6rem]'
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilteringSection;
