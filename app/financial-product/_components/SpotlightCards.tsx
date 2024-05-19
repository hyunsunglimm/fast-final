'use client';

import DropdownIcon from '@/components/icons/DropdownIcon';
import FlexBox from '@/components/ui/FlexBox';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import { useState } from 'react';

const SpotlightCards = () => {
  const [selectedTab, setSelectedTab] = useState('신용카드');

  return (
    <div>
      <FlexBox alignItems='center'>
        <Text
          sizes='20'
          className='mr-[0.8rem] border-b-[1px] border-black opacity-40'
          weight='700'
        >
          20대
        </Text>
        <DropdownIcon />
        <Text sizes='20' variant='h1' weight='700' className='ml-[1.4rem]'>
          주목받는 카드
        </Text>
      </FlexBox>
      <Tab
        array={['신용카드', '체크카드']}
        type='box'
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
};

export default SpotlightCards;
