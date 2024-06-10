'use client';

import Text from '@/components/ui/Text';
import CustomNavigationCard from './CustomNavigationCard';
import { FINANCIAL_PRODUCT_NAVIGATION } from '@/shared/utils/financial-product/staticData';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useWindowResize } from '@/shared/hooks/useWindowResize';

const CustomNavigationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const { windowWidth } = useWindowResize();

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(containerRef.current.scrollWidth);
    }
  }, [windowWidth]);

  return (
    <section className='mb-40'>
      <Text sizes='20' variant='h1' weight='700' className='mb-20'>
        맞춤탐색
      </Text>
      <div className='w-full scroll-px-20 overflow-hidden'>
        <motion.div
          drag='x'
          dragConstraints={{ left: -(contentWidth - containerWidth), right: 0 }}
          className='hide-scrollbar flex gap-20 overflow-x-scroll'
        >
          {FINANCIAL_PRODUCT_NAVIGATION.map((info) => (
            <CustomNavigationCard key={info.title} recommendationInfo={info} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomNavigationSection;
