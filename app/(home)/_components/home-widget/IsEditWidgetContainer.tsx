'use client';
// import { IsBackHeader } from '@/components/Header';
import { ArrowLeftIcon } from '@/components/icons';
import FlexBox from '@/components/ui/FlexBox';
import { motion } from 'framer-motion';
import Text from '@/components/ui/Text';

type IsEditWidgetContainerProps = {
  children: React.ReactNode;
  setOpenEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};
const IsEditWidgetContainer = ({ children, setOpenEditMode }: IsEditWidgetContainerProps) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0' }}
      transition={{ ease: 'easeInOut', duration: 0.25 }}
      className='absolute inset-0 h-screen w-full bg-gray-50 px-[2rem]'
    >
      <FlexBox alignItems='center' justifyContent='between' className='h-[5.6rem]'>
        <div className='w-[2.4rem] cursor-pointer' onClick={() => setOpenEditMode(false)}>
          <ArrowLeftIcon />
        </div>
        <FlexBox justifyContent='center'>
          <Text variant='h6' sizes='16'>
            한 눈에 보기 편집
          </Text>
        </FlexBox>
        <div className='w-[2.4rem]'></div>
      </FlexBox>
      {children}
    </motion.div>
  );
};
export default IsEditWidgetContainer;
