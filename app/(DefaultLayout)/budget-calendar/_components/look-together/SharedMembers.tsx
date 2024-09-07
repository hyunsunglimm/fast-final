import React, { useRef, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
import Title from '../common/Title';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
import { SharedMembersProps, FriendData, Friend } from '@/shared/types/budgetCalendarType';
import { useWindowResize } from '@/shared/hooks/useWindowResize';
import { getFriend } from '@/service/api/calendar/share';

const SharedMembers = ({ viewMode, selectedProfile, setSelectedProfile }: SharedMembersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const { windowWidth } = useWindowResize();

  const { data: items, isLoading } = useQuery<FriendData>({
    queryKey: ['getFriends'],
    queryFn: getFriend
  });

  // 공유한 멤버 스크롤 될 수 있는 width 영역
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(containerRef.current.scrollWidth);
    }
  }, [windowWidth, viewMode]);

  // 공유한 멤버 select
  const handleProfileClick = (item: Friend) => {
    setSelectedProfile(item);
  };

  if (isLoading) {
    return <LoadingBackdrop />;
  }
  return (
    <section className='pb-40 pt-16 text-12'>
      <FlexBox alignItems='center' justifyContent='between' className='mb-16 px-20'>
        <Title title='공유한 멤버'>
          <p className='text-14 font-500 text-gray-700'>{items?.friendCount}명</p>
        </Title>
        <Button size='xs' styled='outline' className='px-12'>
          멤버 편집
        </Button>
      </FlexBox>
      <div className='w-full scroll-px-20 overflow-hidden px-20' ref={containerRef}>
        <motion.ul
          className='flex gap-16 text-center'
          drag='x'
          dragConstraints={{ left: -(contentWidth - containerWidth), right: 0 }}
          style={{ cursor: 'grab' }}
        >
          {items?.friendList.map((item, index) => {
            return (
              <li key={index} className='relative p-4' onClick={() => handleProfileClick(item)}>
                {selectedProfile?.name === item.name && (
                  <div className='absolute z-[2] h-[4rem] w-[4rem] rounded-full border-[0.3rem] border-primary'></div>
                )}
                <Icon
                  src={item.profileImageUrl || '/icons/profile/profile.svg'}
                  alt={item.name}
                  size='40'
                  className={'pointer-events-none mb-8'}
                />
                <p className={`${selectedProfile?.name === item.name ? 'text-primary' : ''}`}>
                  {item.name}
                </p>
              </li>
            );
          })}
          <li className='h-[4rem] w-[4rem]'></li>
        </motion.ul>
      </div>
    </section>
  );
};

export default SharedMembers;
