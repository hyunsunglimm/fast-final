import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
import Title from '../common/Title';
import { SharedMembersProps } from '@/shared/types/budgetCalendarType';
import { useWindowResize } from '@/shared/hooks/useWindowResize';

// 공유한 멤버 더미 데이터
const items = [
  { profile: '/icons/profile/profile.svg', name: '나' },
  { profile: '/icons/profile/profile.svg', name: 'John' },
  { profile: '/icons/profile/profile.svg', name: 'Jane' },
  { profile: '/icons/profile/profile.svg', name: 'Alice' },
  { profile: '/icons/profile/profile.svg', name: 'Bob' },
  { profile: '/icons/profile/profile.svg', name: 'Eve' },
  { profile: '/icons/profile/profile.svg', name: 'Mike' },
  { profile: '/icons/profile/profile.svg', name: 'Anna' },
  { profile: '/icons/profile/profile.svg', name: 'Tom' },
  { profile: '/icons/profile/profile.svg', name: 'Lisa' },
  { profile: '/icons/profile/profile.svg', name: 'David' }
];

const SharedMembers = ({ viewMode, selectedProfile, setSelectedProfile }: SharedMembersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const { windowWidth } = useWindowResize();

  // 공유한 멤버 스크롤 될 수 있는 width 영역
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(containerRef.current.scrollWidth);
    }
  }, [windowWidth, viewMode]);

  // 공유한 멤버 select
  const handleProfileClick = (name: string) => {
    setSelectedProfile(name);
  };
  return (
    <section className='py-40 text-12'>
      <FlexBox alignItems='center' justifyContent='between' className='mb-16 px-20'>
        <Title title='공유한 멤버'>
          <p className='text-14 font-500 text-gray-700'>9명</p>
        </Title>
        <Button size='xs' styled='outline' className='px-12'>
          멤버 편집
        </Button>
      </FlexBox>
      <div className='mx-20 w-full overflow-hidden' ref={containerRef}>
        <motion.ul
          className='flex gap-16 text-center'
          drag='x'
          dragConstraints={{ left: -(contentWidth - containerWidth), right: 0 }}
          style={{ cursor: 'grab' }}
        >
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className='relative p-4'
                onClick={() => handleProfileClick(item.name)}
              >
                {selectedProfile === item.name && (
                  <div className='absolute z-[2] h-[4rem] w-[4rem] rounded-full border-[0.3rem] border-primary'></div>
                )}
                <Icon
                  src={item.profile}
                  alt={item.name}
                  size='40'
                  className={'pointer-events-none mb-8'}
                />
                <p className={`${selectedProfile === item.name ? 'text-primary' : ''}`}>
                  {item.name}
                </p>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default SharedMembers;
