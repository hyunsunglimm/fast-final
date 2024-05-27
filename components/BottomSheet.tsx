'use client';
import { VariantProps } from 'class-variance-authority';
import Icon from './Icon';
import Button, { buttonVariants } from './ui/Button';
import FlexBox from './ui/FlexBox';
import Text from './ui/Text';
import { motion, AnimatePresence } from 'framer-motion';

type BottomSheetProps = {
  title: string;
  buttonLabel: string;
  isOpen: boolean;
  buttonOptions?: VariantProps<typeof buttonVariants>;
  onClose: () => void;
  onClick?: () => void;
  children: React.ReactNode;
  isButtonShow?: boolean;
};

const BottomSheet = ({
  title,
  buttonLabel,
  isOpen,
  buttonOptions,
  onClose,
  onClick,
  isButtonShow = true,
  children
}: BottomSheetProps) => {
  const { size, styled, disabled } = buttonOptions || {};

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='fixed inset-0 z-20 mx-auto flex h-full w-full items-end justify-center bg-black/70 xs:w-[520px]'
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='flex max-h-[80%] w-full flex-col gap-[4rem] rounded-t-lg bg-white p-24 xs:w-[520px]'
          >
            <FlexBox alignItems='center' justifyContent='between' className='w-full'>
              <div />
              <Text sizes='16' weight='700'>
                {title}
              </Text>
              <Icon
                onClick={() => onClose()}
                src='/icons/system-icon/x.svg'
                alt='close icon'
                size='20'
              />
            </FlexBox>
            <div className='hide-scrollbar overflow-y-scroll overscroll-contain'>{children}</div>
            {isButtonShow && (
              <Button
                onClick={onClick}
                size={size}
                styled={styled}
                disabled={disabled as boolean}
                className='shrink-0'
              >
                {buttonLabel}
              </Button>
            )}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
