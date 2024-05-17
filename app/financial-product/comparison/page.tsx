'use client';

import Text from '@/components/ui/Text';
import { useState } from 'react';

const menus = [{ title: '예적금' }, { title: '대출' }, { title: '카드' }, { title: '보험' }];

const ComparisonPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('카드');

  return (
    <section>
      <ul className='grid grid-cols-4 border-b-2 border-gray-300'>
        {menus.map(({ title }) => {
          return (
            <li
              key={title}
              className={`cursor-pointer py-[1.2rem] text-center ${selectedMenu === title ? 'border-b-2 border-black text-black' : 'text-gray-300'}`}
              onClick={() => setSelectedMenu(title)}
            >
              <Text sizes='16'>{title}</Text>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ComparisonPage;
