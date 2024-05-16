'use client';
import { motion, useMotionValue } from 'framer-motion';
import { HTMLAttributes, useRef, SetStateAction, useState, useEffect } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import { cn } from '@/utils/twMerge';
import { useIsMounted } from '@/hooks/useIsMounted';
type MotionCarouselProps = {
  children: Array<React.ReactElement>;
  showDots?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const DRAG_BUFFER = 30;

const MotionCarousel = ({
  children,
  showDots = true,
  className,
  ...props
}: MotionCarouselProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [childrenElementWidth, setChildrenElementWidth] = useState(0);
  const [documentSize, setDocumentSize] = useState(0);
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);
  const newChildrenArr = [...children];
  const isMounted = useIsMounted();
  const containerBoxWidth = ref.current ? childrenElementWidth * children.length : 0;
  const gapSize = ref.current
    ? (ref.current?.scrollWidth - containerBoxWidth) / (children.length - 1)
    : 0;
  const moveTranslateX = childrenElementWidth + gapSize;

  const handleResize = () => {
    const documentWidth = document.documentElement.clientWidth;
    setDocumentSize(documentWidth);
  };

  useEffect(() => {
    if (isMounted()) {
      window.addEventListener('resize', handleResize);
    }
    if (ref.current) {
      setChildrenElementWidth(ref.current.children[0].clientWidth);
    }
  }, [children.length, isMounted]);

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
    <div className={cn('relative overflow-hidden', className)} {...props}>
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
