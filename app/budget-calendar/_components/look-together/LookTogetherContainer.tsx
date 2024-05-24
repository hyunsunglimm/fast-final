import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
import Icon from '@/components/Icon';
import Line from '../common/Line';
import { motion } from 'framer-motion';
import { useWindowResize } from '@/hooks/useWindowResize';

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

// 소비 날씨
const weatherData = [
  { src: '/icons/weather/weather-3.svg', alt: '흐림', days: '11일' },
  { src: '/icons/weather/weather-2.svg', alt: '맑음', days: '9일' },
  { src: '/icons/weather/weather-5.svg', alt: '천둥번개', days: '5일' },
  { src: '/icons/weather/weather-1.svg', alt: '무지개', days: '2일' }
];

const LookTogetherContainer: React.FC<{ viewMode: string }> = ({ viewMode }) => {
  // 함께봐요
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState('나');
  const { documentSize } = useWindowResize();

  // 공유한 멤버 스크롤 될 수 있는 width 영역
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(containerRef.current.scrollWidth);
    }
  }, [documentSize, viewMode]);

  // 공유한 멤버 select
  const handleProfileClick = (name: string) => {
    setSelectedProfile(name);
  };

  return (
    <>
      {/* 공유한 멤버 */}
      <div className='py-40'>
        <FlexBox alignItems='center' justifyContent='between' className='mb-16 px-20'>
          <FlexBox alignItems='center' justifyContent='between'>
            <h2 className='mr-8 text-18 font-600'>공유한 멤버</h2>
            <p className='text-14 font-500 text-gray-700'>9명</p>
          </FlexBox>
          <Button size='xs' styled='outline' className='px-12'>
            멤버 편집
          </Button>
        </FlexBox>
        <div className='w-full overflow-hidden px-20' ref={containerRef}>
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
      </div>
      {/* 공유 가계부 캘린더 */}
      <div className='px-20 pb-24'>
        <h2 className='mb-16 text-18 font-600'>{selectedProfile}님의 공유 가계부</h2>
        <div className='h-[30rem]'>캘린더 넣을 예정</div>
      </div>
      <Line />
      {/* 소비 날씨 */}
      <div className='px-20 py-32 text-12'>
        <FlexBox justifyContent='between' alignItems='center'>
          <h2 className='mb-16 text-18 font-600'>{selectedProfile}님의 소비 날씨는?</h2>
          <Icon size='16' src='/icons/system-icon/info.svg' alt='정보' />
        </FlexBox>
        <FlexBox justifyContent='between' className='my-40 rounded-md bg-gray-300 p-24'>
          <div>
            <h4 className='mb-8 flex h-[5.4rem] items-center text-14 font-700'>
              지출 비가 내린 날이
              <br />
              15일로 가장 많았어요
            </h4>
            <p className='text-gray-600'>목표 예산에서 평균 80% 썼어요</p>
          </div>
          <div className='p-[1.33rem]'>
            <Icon
              src='/icons/weather/weather-4.svg'
              alt='비 날씨'
              className='h-[5.33rem] w-[5.33rem]'
            />
          </div>
        </FlexBox>
        <FlexBox justifyContent='center' className='gap-24 text-center'>
          {weatherData.map((weather, index) => {
            return (
              <div key={index} className='p-8 pb-8'>
                <Icon src={weather.src} alt={weather.alt} size='32' />
                <p className='mt-12'>{weather.days}</p>
              </div>
            );
          })}
        </FlexBox>
      </div>
      <Line />
      {/* 쓰고 후회한 돈 */}
      <div className='px-20 py-32 text-14'>
        <h2 className='mb-16 text-18 font-600'>쓰고 후회한 돈</h2>
        <div className='text-center'>
          <div className='mb-40 h-[15.9rem] w-[16rem] text-[16rem]'></div>
          <div className='mb-16'>
            <h4 className='mb-4 text-18 font-700'>최신형 맥북</h4>
            <p>만큼 아낄 수 있었어요</p>
          </div>
          <p className='text-12 text-gray-500'>총 1,000,000원</p>
        </div>
      </div>
    </>
  );
};

export default LookTogetherContainer;
