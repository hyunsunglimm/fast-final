'use client';
import { motion } from 'framer-motion';

type TransitonContainerProps = {
  children: React.ReactNode;
};

const variants = {
  initial: { x: 100, display: 'none', opacity: 0 },
  animate: { x: 0, display: 'block', opacity: 1 },
  exit: { x: -100, display: 'none', opacity: 0 }
};
const TransitonContainer = ({ children }: TransitonContainerProps) => {
  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.125, ease: 'easeIn' }}
    >
      {children}
    </motion.div>
  );
};
export default TransitonContainer;
