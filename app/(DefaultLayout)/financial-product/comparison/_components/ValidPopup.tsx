import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { AnimatePresence, motion } from 'framer-motion';

const ValidPopup = ({ count, isOpen = false }: { count: number; isOpen?: boolean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='fixed bottom-40 z-20 w-[520px] px-20'
        >
          <FlexBox alignItems='center' className='gap-8 rounded-sm bg-[#4B5158] px-20 py-16'>
            <Icon
              src='/icons/system-icon/checkbox/round-checkbox-on.svg'
              alt='check icon'
              size='16'
            />
            <Text weight='500' className='text-white'>
              비교 가능한 항목이 {count}개 있어요
            </Text>
          </FlexBox>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ValidPopup;
