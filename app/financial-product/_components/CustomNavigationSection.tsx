'use client';

import Text from '@/components/ui/Text';
import CustomNavigationCard from './CustomNavigationCard';
import { FINANCIAL_PRODUCT_NAVIGATION } from '@/shared/utils/financial-product/staticData';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useWindowResize } from '@/shared/hooks/useWindowResize';
import { useTotalWidth } from '@/shared/hooks/useTotalWidth';

const CustomNavigationSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const motionRef = useRef<HTMLDivElement | null>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [dragging, setDragging] = useState(false);
  const { windowWidth } = useWindowResize();
  const { totalWidth } = useTotalWidth(motionRef);

  useEffect(() => {
    if (containerRef.current && motionRef.current) {
      setConstraints({
        left: -(motionRef.current.scrollWidth - containerRef.current.clientWidth),
        right: 0
      });
    }
  }, [windowWidth]);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
  };

  const touchClass = dragging ? 'touch-pan-x' : 'touch-auto';

  return (
    <section className='mb-40'>
      <Text sizes='20' variant='h1' weight='700' className='mb-20'>
        맞춤탐색
      </Text>
      <div className={`${touchClass} relative w-full overflow-hidden`} ref={containerRef}>
        <motion.div
          ref={motionRef}
          drag='x'
          dragConstraints={constraints}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          className='mb-4 flex cursor-grab items-center gap-x-16'
          style={{ width: `${totalWidth / 10}rem` }}
        >
          {FINANCIAL_PRODUCT_NAVIGATION.map((info) => {
            return (
              <CustomNavigationCard
                key={info.title}
                recommendationInfo={info}
                dragging={dragging}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomNavigationSection;
