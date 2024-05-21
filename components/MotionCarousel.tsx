/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

'use client';
import { motion, useMotionValue } from 'framer-motion';
import { HTMLAttributes, useRef, SetStateAction, useState, useEffect, TouchEvent } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import { cn } from '@/utils/twMerge';
import { useWindowResize } from '@/hooks/useWindowResize';
import Text from './ui/Text';

type MotionCarouselProps = {
  children: Array<React.ReactNode>;
  showDots?: boolean;
  showNumber?: boolean;
  moveGap?: number;
} & HTMLAttributes<HTMLDivElement>;

const DRAG_BUFFER = 10;

const MotionCarousel = ({
  children,
  moveGap,
  showDots = true,
  showNumber = false,
  className,
  ...props
}: MotionCarouselProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [childrenElementWidth, setChildrenElementWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);

  const { documentSize } = useWindowResize();
  const newChildrenArr = [...children];
  const containerBoxWidth = ref.current ? childrenElementWidth * children.length : 0;
  const gapSize =
    ref.current && children.length > 1
      ? (ref.current?.scrollWidth - containerBoxWidth) / (children.length - 1)
      : 0;
  const moveTranslateX = childrenElementWidth + gapSize - (moveGap || 0);

  useEffect(() => {
    if (ref.current) {
      setChildrenElementWidth(ref.current.children[0].clientWidth);
    }
  }, [children.length, documentSize]);

  useEffect(() => {
    const unsubX = dragX.on('change', (latest) => {
      if (Math.abs(latest) >= DRAG_BUFFER) {
        setDragging(true);
      }
    });

    return () => {
      unsubX();
    };
  }, [dragX]);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();
    if (x <= -DRAG_BUFFER && index < children.length - 1) {
      setIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && index > 0) {
      setIndex((prev) => prev - 1);
    }
  };
  const touchClass = dragging ? 'touch-pan-x' : 'touch-auto';
  return (
    <div className={cn('relative overflow-hidden', touchClass, className)} {...props}>
      <motion.div
        ref={ref}
        drag='x'
        dragConstraints={{
          left: 0,
          right: 0
        }}
        animate={{
          translateX: `-${index * moveTranslateX}px`
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        style={{
          x: dragX
        }}
        className='flex cursor-grab items-center gap-x-4 active:cursor-grabbing'
      >
        {children}
      </motion.div>
      {showDots && <Dots index={index} setIndex={setIndex} newChildrenArr={newChildrenArr} />}
      {showNumber && (
        <NumberIndicator index={index} setIndex={setIndex} newChildrenArr={newChildrenArr} />
      )}
    </div>
  );
};
export default MotionCarousel;

type DotsProps = {
  index: number;
  setIndex: React.Dispatch<SetStateAction<number>>;
  newChildrenArr: Array<React.ReactNode>;
};

const Dots = ({ index, setIndex, newChildrenArr }: DotsProps) => {
  return (
    <FlexBox alignItems='center' justifyContent='center' className='mt-[1.6rem] w-full'>
      {newChildrenArr.map((item, idx) => {
        const currentDotClass = idx === index ? 'w-[1.8rem] bg-black' : 'w-[0.8rem] bg-gray-300';
        return (
          <span
            key={item + `${idx}`}
            className={`${currentDotClass} me-3 flex h-[0.8rem] cursor-pointer rounded-full transition-all duration-100 ease-in`}
            onClick={() => setIndex(idx)}
          ></span>
        );
      })}
    </FlexBox>
  );
};

const NumberIndicator = ({ index, setIndex, newChildrenArr }: DotsProps) => {
  return (
    <FlexBox
      alignItems='center'
      justifyContent='center'
      className='absolute bottom-12 right-6 z-10 rounded-full bg-black/50 px-[0.6rem] py-[0.2rem]'
    >
      <Text sizes='10' weight='400' className='text-white'>
        {index + 1} / {newChildrenArr.length}
      </Text>
    </FlexBox>
  );
};
