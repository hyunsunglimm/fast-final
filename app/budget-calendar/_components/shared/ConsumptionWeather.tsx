'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Title from '../common/Title';
import Icon from '@/components/Icon';
import { Friend } from '@/shared/types/budgetCalendarType';
import { useQuery } from '@tanstack/react-query';
import { getConsumptionWeather } from '@/service/api/calendar/share';
import { SqureSkeleton } from '@/components/ui/skeleton';
import { useYearMonthStore } from '@/store/yearMonthStore';
const WeatherInfoBottomSheet = dynamic(() => import('./WeatherInfoBottomSheet'));

type SharedCalendarProps = {
  selectedProfile: Friend;
};

const ConsumptionWeather = ({ selectedProfile }: SharedCalendarProps) => {
  const [openWeatherInfo, setOpenWeatherInfo] = useState(false);
  const { selectedYear, selectedMonth } = useYearMonthStore();
  const { data, isLoading } = useQuery({
    queryKey: ['consumptionweather', selectedYear, selectedMonth, selectedProfile.memberId],
    queryFn: () => getConsumptionWeather(selectedYear, selectedMonth, selectedProfile.memberId)
  });
  if (isLoading) {
    return <SqureSkeleton />;
  }
  const bgClass = data && data?.weather[0].weatherImageNo > 3 ? 'bg-gray-300' : 'bg-select';
  return (
    <>
      <section className='px-20 py-32 text-12'>
        <Title title={`${selectedProfile?.name}님의 소비 날씨는?`}>
          <Icon
            role='button'
            size='16'
            src='/icons/system-icon/info.svg'
            alt='정보'
            className='cursor-pointer'
            onClick={() => setOpenWeatherInfo(true)}
          />
        </Title>
        <FlexBox justifyContent='between' className={`my-40 rounded-md ${bgClass} p-24`}>
          <div>
            <h4 className='mb-8 flex h-[5.4rem] items-center text-14 font-700'>
              {data?.weather[0].weatherName}이
              <br />
              {data?.weather[0].count}일로 가장 많았어요
            </h4>
            <p className='text-gray-600'>목표 예산에서 평균 {data?.used}% 썼어요</p>
          </div>
          <Icon
            src={`/icons/weather/weather-${data?.weather[0].weatherImageNo}.svg`}
            alt='비 날씨'
            className='h-[8rem] w-[8rem]'
          />
        </FlexBox>
        <FlexBox justifyContent='center' className='gap-24 text-center'>
          {data &&
            data.weather.slice(1, 5).map((weather, index) => {
              const imgSrc = `/icons/weather/weather-${weather.weatherImageNo}.svg`;
              return (
                <FlexBox flexDirection='col' alignItems='center' key={index}>
                  <Icon src={imgSrc} alt={weather.weatherName} size='48' />
                  <span className='mt-4 font-700 text-gray-700'>{weather.count}일</span>
                </FlexBox>
              );
            })}
        </FlexBox>
      </section>

      {/* 소비 날씨 정보 바텀시트 */}
      <WeatherInfoBottomSheet
        setOpenWeatherInfo={setOpenWeatherInfo}
        openWeatherInfo={openWeatherInfo}
        title='소비 날씨'
      />
    </>
  );
};

export default ConsumptionWeather;
