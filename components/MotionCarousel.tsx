'use client';
import { motion, useMotionValue } from 'framer-motion';
import { HTMLAttributes, useRef, SetStateAction, useState } from 'react';
import FlexBox from '@/components/ui/FlexBox';

type MotionCarouselProps = {
  children: Array<React.ReactElement>;
  showDots?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const DRAG_BUFFER = 30;

const MotionCarousel = ({ children, showDots = true, ...props }: MotionCarouselProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [dragging, setDragging] = useState(false);
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);
  const newChildrenArr = [...children];
  const childrenWidth = ref.current ? ref.current?.children[0].children[0].clientWidth + 14 : 0;

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

  return (
    <div className='relative overflow-hidden' {...props} ref={ref}>
      <motion.div
        drag='x'
        dragConstraints={{
          left: 0,
          right: 0
        }}
        animate={{
          translateX: `-${index * childrenWidth}px`
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
    </div>
  );
};
export default MotionCarousel;

type DotsProps = {
  index: number;
  setIndex: React.Dispatch<SetStateAction<number>>;
  newChildrenArr: Array<React.ReactElement>;
};

const Dots = ({ index, setIndex, newChildrenArr }: DotsProps) => {
  return (
    <FlexBox alignItems='center' justifyContent='center' className='my-[1.6rem] w-full'>
      {newChildrenArr.map((item, idx) => {
        const currentDotClass = idx === index ? 'w-[1.8rem] bg-black' : 'w-[0.8rem] bg-gray-300';
        return (
          <span
            key={item.key + `${idx}`}
            className={`${currentDotClass} me-3 flex h-[0.8rem] cursor-pointer rounded-full transition-all duration-100 ease-in`}
            onClick={() => setIndex(idx)}
          ></span>
        );
      })}
    </FlexBox>
  );
};
