'use client';
import { motion, useAnimationControls } from 'framer-motion';
type ProgressBarProps = {
  progressPercent: number;
  barColor: 'primary' | 'white';
};

export const ProgressBar = ({ progressPercent, barColor }: ProgressBarProps) => {
  const controls = useAnimationControls();

  const barColorClass = {
    primary: 'bg-primary',
    white: 'bg-white'
  };

  return (
    <motion.div
      className={`h-full w-full ${barColorClass[barColor]} rounded-full`}
      initial={{
        width: '0%'
      }}
      whileInView={{
        width: `${progressPercent}%`
      }}
      viewport={{
        once: true
      }}
      animate={controls}
      transition={{ duration: 0.25 }}
    ></motion.div>
  );
};
