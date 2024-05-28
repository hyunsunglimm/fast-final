import React, { useState } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import Line from '../common/Line';
import Title from '../common/Title';
import SharedCalendar from './SharedCalendar';
import SharedMembers from './SharedMembers';

// 소비 날씨
const weatherData = [
  { src: '/icons/weather/weather-3.svg', alt: '흐림', days: '11일' },
  { src: '/icons/weather/weather-2.svg', alt: '맑음', days: '9일' },
  { src: '/icons/weather/weather-5.svg', alt: '천둥번개', days: '5일' },
  { src: '/icons/weather/weather-1.svg', alt: '무지개', days: '2일' }
];

const LookTogetherContainer: React.FC<{ viewMode: string }> = ({ viewMode }) => {
  // 함께봐요
  const [selectedProfile, setSelectedProfile] = useState('나');

  return (
    <>
      {/* 공유한 멤버 */}
      <SharedMembers
        viewMode={viewMode}
        selectedProfile={selectedProfile}
        setSelectedProfile={setSelectedProfile}
      />
      {/* 공유 가계부 캘린더 */}
      <SharedCalendar selectedProfile={selectedProfile} />
      <Line />
      {/* 소비 날씨 */}
      <div className='px-20 py-32 text-12'>
        <Title title={`${selectedProfile}님의 소비 날씨는?`}>
          <Icon size='16' src='/icons/system-icon/info.svg' alt='정보' />
        </Title>
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
        <Title title='쓰고 후회한 돈' />
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
