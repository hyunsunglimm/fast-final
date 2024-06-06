'use client';
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.125, ease: 'easeIn' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default TransitonContainer;
