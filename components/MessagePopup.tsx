import { AnimatePresence, motion } from 'framer-motion';

type MessagePopupProps = {
  isView: boolean;
  children: React.ReactNode;
};

const MessagePopup = ({ isView, children }: MessagePopupProps) => {
  return (
    <AnimatePresence>
      {isView && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='mt-20 rounded-xs bg-warning/40 p-2 text-2xl text-warning'
        >
          {children}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default MessagePopup;
