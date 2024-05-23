'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { DefaultHeader } from '@/components/header';
import Tab from '@/components/ui/Tab';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useWindowResize } from '@/hooks/useWindowResize';
import Icon from '@/components/Icon';

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

const BudgetCalendarPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const viewMode = searchParams.get('viewMode') || '혼자봐요';
  // const displayMode =
  //   searchParams.get('displayMode') || (viewMode === '혼자봐요' ? '캘린더 보기' : '');

  // viewMode와 displayMode가 설정되지 않았을 경우 (기본값 설정: 혼자봐요, 캘린더 보기)
  useEffect(() => {
    if (
      !searchParams.get('viewMode') ||
      (viewMode === '혼자봐요' && !searchParams.get('displayMode'))
    ) {
      const newParams = new URLSearchParams(searchParams.toString());
      if (!searchParams.get('viewMode')) {
        newParams.set('viewMode', '혼자봐요');
      }
      if (viewMode === '혼자봐요' && !searchParams.get('displayMode')) {
        newParams.set('displayMode', '캘린더 보기');
      }
      router.replace(`/budget-calendar?${newParams.toString()}`);
    }
  }, [searchParams, router, viewMode]);

  // 함께봐요에서 displayMode 삭제
  const handleViewModeChange = (newViewMode: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('viewMode', newViewMode);

    if (newViewMode === '혼자봐요') {
      if (!newParams.get('displayMode')) {
        newParams.set('displayMode', '캘린더 보기');
      }
    } else {
      newParams.delete('displayMode');
    }

    router.replace(`/budget-calendar?${newParams.toString()}`);
  };

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
    <div className='min-h-full bg-white pb-[13.2rem]'>
      <DefaultHeader title='가계부' />
      <Tab
        array={['혼자봐요', '함께봐요']}
        type='underline'
        tabKey='viewMode'
        onTabChange={handleViewModeChange}
      />
      {viewMode === '혼자봐요' && (
        <>
          <div className='px-20 pb-24 pt-16'>
            <Tab array={['캘린더 보기', '내역 보기']} type='box' tabKey='displayMode' />
          </div>
          {/* 콘텐츠 */}
          <div className='px-20 text-12'>
            <FlexBox
              alignItems='center'
              justifyContent='between'
              className='cursor-pointer rounded-md bg-banner p-16 text-14'
            >
              <FlexBox alignItems='center'>
                <div className='relative mr-12 h-[2.4rem] w-[2.4rem]'>
                  <Image src='/icons/budget-calendar/small-pig.svg' alt='pig' fill />
                </div>
                <p>목표 예산 중 50%를 썼어요</p>
              </FlexBox>
              <div className='relative h-[1.6rem] w-[1.6rem]'>
                <Image
                  src='/icons/system-icon/arrow/arrow-right-gray.svg'
                  alt='오른쪽화살표'
                  fill
                />
              </div>
            </FlexBox>
            <div className='mt-24 h-[30rem]'>
              <FlexBox alignItems='center'>
                <h2 className=' mr-8 text-18 font-600'>소비 캘린더</h2>
                <div className='relative h-[1.6rem] w-[1.6rem]'>
                  <Image src='/icons/system-icon/info.svg' alt='정보' fill />
                </div>
              </FlexBox>
            </div>
          </div>
          {/* 라인 */}
          <div className='h-[1.6rem] bg-gray-50'></div>
          {/* 소비내역 콘텐츠 */}
          <div className='px-20 py-24 text-16'>
            <FlexBox alignItems='center' justifyContent='between' className='mb-32'>
              <h2 className='text-18 font-700'>소비 내역</h2>
              <div className='flex cursor-pointer items-center text-14 text-gray-500'>
                <div className='relative h-[1.6rem] w-[1.6rem]'>
                  <Image src='/icons/system-icon/plus-gray.svg' alt='추가' fill />
                </div>
                <p className='ml-4'>내역추가</p>
              </div>
            </FlexBox>
            <FlexBox justifyContent='between' className='mb-32 gap-[1.6rem]'>
              <div className='w-1/2 rounded-md bg-gray-50 p-16 pb-10'>
                <p className='mb-4 text-14 text-gray-700'>지출</p>
                <p className='font-700'>- 1,000,000원</p>
              </div>
              <div className='w-1/2 rounded-md bg-gray-50 p-16 pb-10'>
                <p className='mb-4 text-14 text-gray-700'>지출</p>
                <p className='font-700'>- 1,000,000원</p>
              </div>
            </FlexBox>
            <div>
              <div className='flex items-center gap-[0.8rem]'>
                <span className='text-14 text-gray-500'>10일 화요일</span>
                <p className='text-12 text-warning'>이번 달 예산 초과</p>
              </div>
              <ul>
                <li className='mt-24 flex items-center justify-between gap-[1.6rem]'>
                  <div className='relative h-[4rem] w-[4rem] shrink-0'>
                    <Image src='/icons/categories/background/categories-2.svg' alt='생활' fill />
                  </div>
                  <div className='w-full'>
                    <p className='mb-4 font-700'>- 1,000,000원</p>
                    <div className='flex gap-[0.2rem] text-12 text-gray-500'>
                      <p>결제처</p>
                      <p>|</p>
                      <p>결제 수단</p>
                    </div>
                  </div>
                  <div className='shrink-0'>
                    <div className='relative m-auto mb-6 h-[2.4rem] w-[2.4rem]'>
                      <Image
                        src='/icons/categories/background/categories-regret.svg'
                        alt='후회 소비'
                        fill
                      />
                    </div>
                    <p className='text-12 text-[#7191F3]'>후회 소비</p>
                  </div>
                </li>
                <li className='mt-24 flex items-center justify-between gap-[1.6rem]'>
                  <div className='relative h-[4rem] w-[4rem] shrink-0'>
                    <Image src='/icons/categories/background/categories-2.svg' alt='생활' fill />
                  </div>
                  <div className='w-full'>
                    <p className='mb-4 font-700'>- 1,000,000원</p>
                    <div className='flex gap-[0.2rem] text-12 text-gray-500'>
                      <p>결제처</p>
                      <p>|</p>
                      <p>결제 수단</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      {viewMode === '함께봐요' && (
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
          {/* 라인 */}
          <div className='h-[1.6rem] bg-gray-50'></div>
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
          {/* 라인 */}
          <div className='h-[1.6rem] bg-gray-50'></div>
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
      )}
    </div>
  );
};

export default BudgetCalendarPage;
