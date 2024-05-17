'use client';
// import { IsBackHeader } from '@/components/Header';
import { motion } from 'framer-motion';

type IsEditWidgetContainerProps = {
  children: React.ReactNode;
  openEditMode: boolean;
};
const IsEditWidgetContainer = ({ children, openEditMode }: IsEditWidgetContainerProps) => {
  return (
    <motion.div
      initial='closed'
      animate={openEditMode ? 'open' : 'closed'}
      variants={{
        open: { x: 0, display: 'block' },
        closed: { x: '100%', display: 'none' }
      }}
      transition={{ ease: 'easeInOut', duration: 0.25 }}
      className='absolute inset-0 mx-auto h-screen overflow-scroll bg-gray-50 xs:w-[520px]'
    >
      {children}
    </motion.div>
  );
};
export default IsEditWidgetContainer;
