'use client';
import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import { motion } from 'framer-motion';
import { useWindowResize } from '@/hooks/useWindowResize';
const ItemList = [1, 2, 3, 4, 5];

const NetWorthSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const { documentSize } = useWindowResize();

  useEffect(() => {
    if (containerRef.current) {
      setConstraints({
        left: -(containerRef.current.scrollWidth - containerRef.current.clientWidth),
        right: 0
      });
    }
  }, [documentSize]);

  const handleItemClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className='mb-24 ml-20 mt-20 flex flex-col'>
        <Text sizes='16' weight='600'>
          순자산
        </Text>
        <Text sizes='24' weight='700'>
          3,123,567원
        </Text>
      </div>

      <div className='relative overflow-hidden'>
        <motion.div
          ref={containerRef}
          drag='x'
          dragConstraints={constraints}
          className='mb-4 flex cursor-grab scroll-pr-8 items-center gap-x-[1.6rem]'
        >
          <div className='h-[2rem] w-[0.4rem] shrink-0' aria-hidden></div>
          {ItemList.map((item) => {
            return (
              <Card
                key={item}
                className={'aspect-square w-[24rem] shrink-0 cursor-pointer'}
                onClick={handleItemClick}
              >
                <CardHeader>
                  <Text></Text>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            );
          })}
          <div className='h-[2rem] w-[0.4rem] shrink-0' aria-hidden></div>
        </motion.div>
      </div>
    </>
  );
};
export default NetWorthSection;
