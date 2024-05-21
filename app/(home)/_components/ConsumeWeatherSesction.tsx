import MotionCarousel from '@/components/MotionCarousel';
import React from 'react';
import ConsumeWeatherCard from './consume-weather/ConsumeWeatherCard';

const DUMMY_DATA = [
  {
    date: '2024-05-15',
    usedCost: 50000, // 소비 금액
    weatherId: 1, // 일별 날씨 ID
    reaction: false // 반응 존재 여부
  },
  {
    date: '2024-05-17',
    usedCost: 200000, // 소비 금액
    weatherId: 3, // 일별 날씨 ID
    reaction: false // 반응 존재 여부
  },
  {
    date: '2024-05-19',
    usedCost: 500000, // 소비 금액
    weatherId: 4, // 일별 날씨 ID
    reaction: false // 반응 존재 여부
  }
];

const today = new Date().getDate();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterdayDate = yesterday.getDate();

const filteredData = DUMMY_DATA.filter((item) => {
  const itemDate = new Date(item.date).getDate();
  return itemDate >= yesterdayDate && itemDate <= today;
});

if (filteredData.length === 0) {
  filteredData.push({
    date: yesterday.toISOString().split('T')[0],
    usedCost: 0,
    weatherId: 1,
    reaction: false
  });
}

const ConsumeWeatherSesction = () => {
  return (
    <MotionCarousel className='pl-20' showDots={false}>
      {filteredData.map((item) => {
        return <ConsumeWeatherCard key={item.date} weatherId={item.weatherId}></ConsumeWeatherCard>;
      })}
    </MotionCarousel>
  );
};

export default ConsumeWeatherSesction;
