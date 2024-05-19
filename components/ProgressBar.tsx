'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';
type ProgressBarProps = {
  progressPercent: number;
  barColor: 'primary' | 'white';
};

export const ProgressBar = ({ progressPercent, barColor }: ProgressBarProps) => {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const isInview = useInView(ref);

  useEffect(() => {
    controls.set({ width: '0%' });

    if (isInview) {
      controls.start({ width: `${progressPercent}%` });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInview]);

  const barColorClass = {
    primary: 'bg-primary',
    white: 'bg-white'
  };

  return (
    <motion.div
      ref={ref}
      className={`h-full w-full ${barColorClass[barColor]} rounded-full`}
      initial={{
        width: '0%'
      }}
      animate={controls}
      transition={{ duration: 0.25 }}
    ></motion.div>
  );
};
