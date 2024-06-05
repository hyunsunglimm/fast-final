'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Title from '../common/Title';
import Icon from '@/components/Icon';
const WeatherInfoBottomSheet = dynamic(() => import('./WeatherInfoBottomSheet'));
// 소비 날씨
const weatherData = [
  { src: '/icons/weather/weather-3.svg', alt: '흐림', days: '11일' },
  { src: '/icons/weather/weather-2.svg', alt: '맑음', days: '9일' },
  { src: '/icons/weather/weather-5.svg', alt: '천둥번개', days: '5일' },
  { src: '/icons/weather/weather-1.svg', alt: '무지개', days: '2일' }
];

const ConsumptionWeather: React.FC<{ selectedProfile: string }> = ({ selectedProfile }) => {
  const [openWeatherInfo, setOpenWeatherInfo] = useState(false);
  return (
    <>
      <section className='px-20 py-32 text-12'>
        <Title title={`${selectedProfile}님의 소비 날씨는?`}>
          <Icon
            role='button'
            size='16'
            src='/icons/system-icon/info.svg'
            alt='정보'
            className='cursor-pointer'
            onClick={() => setOpenWeatherInfo(true)}
          />
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
          <Icon
            src='/icons/weather/consumption/weather-4.svg'
            alt='비 날씨'
            className='h-[8rem] w-[8rem]'
          />
        </FlexBox>
        <FlexBox justifyContent='center' className='gap-24 text-center'>
          {weatherData.map((weather, index) => {
            return (
              <div key={index}>
                <Icon src={weather.src} alt={weather.alt} size='48' />
                <p className='mt-4'>{weather.days}</p>
              </div>
            );
          })}
        </FlexBox>
      </section>

      {/* 소비 날씨 정보 바텀시트 */}
      <WeatherInfoBottomSheet
        setOpenWeatherInfo={setOpenWeatherInfo}
        openWeatherInfo={openWeatherInfo}
      />
    </>
  );
};

export default ConsumptionWeather;
