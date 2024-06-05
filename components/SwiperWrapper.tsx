'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperType, PaginationOptions } from 'swiper/types';
import { useRef, forwardRef, useImperativeHandle } from 'react';
import FlexBox from './ui/FlexBox';
import Icon from './Icon';

type SwiperWrapperProps = {
  arrow?: boolean;
  dots?: boolean;
  fraction?: boolean;
  coverflow?: boolean;
  setIndex?: (arg: number) => void;
  children: Array<React.ReactNode>;
};

const SwiperWrapper = forwardRef<HTMLElement, SwiperWrapperProps>(
  (
    { arrow = false, dots = false, fraction = false, coverflow = false, setIndex, children },
    ref
  ) => {
    useImperativeHandle(ref, () => {
      return {
        next() {
          sliderRef.current?.slideNext();
        }
      };
    });

    const sliderRef = useRef<SwiperType | null>();

    const pagination: PaginationOptions = {
      clickable: true,
      renderBullet: (index: number, className: string) => `<span class='${className}'></span>`
    };

    const fractionPagination: PaginationOptions = {
      type: 'fraction',
      renderFraction: (currentClass: string, totalClass: string) => {
        return `<span class='${currentClass}'></span><span>/</span><span class='${totalClass}'></span>`;
      }
    };

    const isLoop = !coverflow || children.length >= 4;

    return (
      <Swiper
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        modules={[EffectCoverflow, Pagination, Navigation]}
        spaceBetween={coverflow ? 20 : 10}
        centeredSlides={coverflow}
        effect={coverflow ? 'coverflow' : undefined}
        slidesPerView={coverflow ? 1.4 : 1}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          scale: 0.9
        }}
        pagination={dots ? pagination : fraction ? fractionPagination : false}
        navigation={arrow}
        onRealIndexChange={(swiper) => setIndex && setIndex(swiper.realIndex)}
        loop={isLoop}
      >
        {children.map((c, idx) => (
          <SwiperSlide key={idx}>{c}</SwiperSlide>
        ))}
        {arrow && (
          <FlexBox
            justifyContent='between'
            className='absolute top-1/2 z-10 w-full translate-y-[-5rem] px-20'
          >
            <div onClick={() => sliderRef.current?.slidePrev()}>
              <Icon src='/icons/system-icon/arrow/arrow-left.svg' alt='이전 버튼' />
            </div>
            <div onClick={() => sliderRef.current?.slideNext()}>
              <Icon src='/icons/system-icon/arrow/arrow-right.svg' alt='다음 버튼' />
            </div>
          </FlexBox>
        )}
      </Swiper>
    );
  }
);

SwiperWrapper.displayName = 'SwiperWrapper';

export default SwiperWrapper;
