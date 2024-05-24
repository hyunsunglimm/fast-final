'use client';

import Carousel, { DotProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type MultiCarouselProps = {
  children: React.ReactNode;
};

const MultiCarousel = ({ children }: MultiCarouselProps) => {
  const responsive = {
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      responsive={responsive}
      infinite
      arrows={false}
      showDots
      customDot={<CustomDot />}
      containerClass='pb-32'
    >
      {children}
    </Carousel>
  );
};

const CustomDot = ({ onClick, active }: DotProps) => {
  const currentDotClass = active ? 'w-[1.8rem] bg-black' : 'w-[0.8rem] bg-gray-300';
  return (
    <li
      className={`${currentDotClass} me-3 flex h-[0.8rem] cursor-pointer rounded-full transition-all duration-100 ease-in`}
      onClick={onClick}
    />
  );
};

export default MultiCarousel;
