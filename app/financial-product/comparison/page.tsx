'use client';

import Tab from '@/components/ui/Tab';
import { useState } from 'react';

const ComparisonPage = () => {
  const [selectedTab, setSelectedTab] = useState('카드');
  const [selectedSubTab, setSelectedSubTab] = useState('신용카드');

  return (
    <section>
      <div className='bg-white'>
        <Tab
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          type='underline'
          array={['예적금', '대출', '카드', '보험']}
        />
        <div className='px-20 py-16'>
          <Tab
            selectedTab={selectedSubTab}
            setSelectedTab={setSelectedSubTab}
            type='box'
            array={['신용카드', '체크카드']}
          />
        </div>
      </div>
    </section>
  );
};

export default ComparisonPage;
