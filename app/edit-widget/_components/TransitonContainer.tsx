'use client';
import { motion } from 'framer-motion';

type TransitonContainerProps = {
  children: React.ReactNode;
};

const variants = {
  open: { x: 0, display: 'block' },
  closed: { x: '100%', display: 'none' }
};
const TransitonContainer = ({ children }: TransitonContainerProps) => {
  return (
    <motion.div variants={variants} initial='closed' animate='open' transition={{ type: 'linear' }}>
      {children}
    </motion.div>
  );
};
export default TransitonContainer;
