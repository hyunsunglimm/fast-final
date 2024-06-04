'use client';
import React, { useState, useEffect, useRef, PointerEvent } from 'react';
import { motion, PanInfo } from 'framer-motion';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Icon from '@/components/Icon';

type BucketBottomSheetProps = {
  totalHeight: number;
  windowWidth: number;
};

const BucketBottomSheet = ({ totalHeight, windowWidth }: BucketBottomSheetProps) => {
  const [height, setHeight] = useState<number>(0);
  const [initialHeight, setInitialHeight] = useState<number>(0);
  const [hasDragged, setHasDragged] = useState<boolean>(false);

  const sheetRef = useRef(null);

  useEffect(() => {
    const calculateHeight = () => {
      if (windowWidth > 520) {
        setHeight(totalHeight / 14);
        setInitialHeight(totalHeight / 14);
      } else {
        setHeight(totalHeight / (windowWidth * 0.026667));
        setInitialHeight(totalHeight / (windowWidth * 0.026667));
      }
    };
    calculateHeight();
  }, [totalHeight, windowWidth]);

  const handleDragStart = (e: MouseEvent | TouchEvent | PointerEvent) => {
    if (hasDragged) {
      e.preventDefault();
      return;
    }
  };
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y < -30) {
      if (height >= initialHeight + 24) return;
      setHeight((prevHeight) => prevHeight + 24);
      setHasDragged(true);
    } else if (info.offset.y > 30) {
      setHeight(initialHeight);
    }
  };
  const handleScrollAreaDrag = (event: PointerEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <>
      <motion.div
        ref={sheetRef}
        className='fixed-container fixed bottom-0 mt-20 w-full overscroll-contain rounded-t-3xl bg-white text-center xs:w-[520px]'
        animate={{ height: `${height}rem` }}
        initial={{ height }}
      >
        {/* 헤더 */}
        <motion.div
          drag='y'
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0}
          className='mt-8 w-full pb-16 pt-8'
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <FlexBox
            role='button'
            id='drag-bar'
            className='mx-auto h-[0.4rem] w-[4.8rem] cursor-grab overflow-hidden rounded-full bg-gray-300'
          />
        </motion.div>
        <Text sizes='16' weight='500' className='my-8'>
          저축 내역
        </Text>

        {/* 내역 스크롤 영역 */}
        <FlexBox
          flexDirection='col'
          justifyContent='between'
          className='hide-scrollbar h-full w-full gap-y-24 overflow-y-scroll overscroll-contain px-20 pb-[16rem]'
          onPointerDown={handleScrollAreaDrag}
        >
          {[...Array(20)].map((_, index) => {
            return (
              <FlexBox
                flexDirection='col'
                justifyContent='between'
                className='w-full gap-y-16'
                key={index}
              >
                <Text sizes='12' className='text-gray-700'>
                  {index} 5월 16일
                </Text>
                <FlexBox justifyContent='between' className='w-full '>
                  <FlexBox alignItems='center' className='gap-x-16'>
                    <Icon src='/icons/logos/bank/bank-bc.svg' alt='아이콘' size='40' />
                    <FlexBox flexDirection='col'>
                      <Text sizes='16'>포코</Text>
                      <Text>18:40</Text>
                    </FlexBox>
                  </FlexBox>
                  <FlexBox flexDirection='col' alignItems='end'>
                    <Text sizes='16' weight='700'>
                      50000원
                    </Text>
                    <Text>50000원</Text>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            );
          })}
        </FlexBox>
        <div className='absolute bottom-[2rem] w-full bg-transparent px-20 xs:w-[520px]'>
          <Button size='md' className='w-full bg-black'>
            저축하기
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default BucketBottomSheet;
