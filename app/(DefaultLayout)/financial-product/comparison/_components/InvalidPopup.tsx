import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { AnimatePresence, motion } from 'framer-motion';

const InvalidPopup = ({ isOpen = false }: { isOpen?: boolean }) => {
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
          <FlexBox className='gap-8 rounded-sm bg-[#4B5158] px-20 py-16' alignItems='center'>
            <Icon src='/icons/financial-product/warning.svg' alt='경고 아이콘' size='20' />
            <Text weight='500' className='text-white'>
              선택하신 카드들은 공통카테고리가 없어요
            </Text>
          </FlexBox>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InvalidPopup;
