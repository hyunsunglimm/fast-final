'use client';

import { useTotalWidth } from '@/shared/hooks/useTotalWidth';
import { useWindowResize } from '@/shared/hooks/useWindowResize';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type DragContainerProps = {
  setIsDragging?: (arg: boolean) => void;
  children: React.ReactNode;
};

const DragContainer = ({ setIsDragging, children }: DragContainerProps) => {
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
    setIsDragging && setIsDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
    setIsDragging && setIsDragging(false);
  };

  const touchClass = dragging ? 'touch-pan-x' : 'touch-auto';

  return (
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
        {children}
      </motion.div>
    </div>
  );
};

export default DragContainer;
