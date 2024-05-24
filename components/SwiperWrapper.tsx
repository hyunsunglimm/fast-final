'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

type SwiperWrapperProps = {
  children: Array<React.ReactNode>;
};

const SwiperWrapper = ({ children }: SwiperWrapperProps) => {
  return (
    <Swiper navigation modules={[Navigation]} spaceBetween={50} slidesPerView={1} loop>
      {children.map((c) => (
        <SwiperSlide key={JSON.stringify(c)}>{c}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;
