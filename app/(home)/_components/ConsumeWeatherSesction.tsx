import MotionCarousel from '@/components/MotionCarousel';
import React from 'react';
import ConsumeWeatherCard from './consume-weather/ConsumeWeatherCard';

const ConsumeWeatherSesction = () => {
  return (
    <MotionCarousel className='pl-20'>
      <ConsumeWeatherCard></ConsumeWeatherCard>
      <ConsumeWeatherCard></ConsumeWeatherCard>
    </MotionCarousel>
  );
};

export default ConsumeWeatherSesction;
