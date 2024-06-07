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
  buttonType?: HTMLButtonElement['type'];
  buttonOptions?: VariantProps<typeof buttonVariants>;
  onClose: () => void;
  onClick?: () => void;
  children: React.ReactNode;
  isButtonShow?: boolean;
  isBack?: boolean;
  onIsBackHandler?: () => void;
};

const BottomSheet = ({
  title,
  buttonLabel,
  isOpen,
  buttonType,
  buttonOptions,
  onClose,
  onClick,
  isButtonShow = true,
  children,
  isBack = false,
  onIsBackHandler
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
          className='fixed inset-0 z-20 mx-auto flex h-full w-full touch-none items-end justify-center bg-black/70 xs:w-[520px]'
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
            className='relative flex max-h-[80%] w-full flex-col gap-[4rem] rounded-t-lg bg-white p-24 xs:w-[520px]'
          >
            <FlexBox alignItems='center' justifyContent='between' className='w-full'>
              {isBack ? (
                <Icon
                  onClick={onIsBackHandler}
                  src='/icons/system-icon/arrow/arrow-left.svg'
                  alt='뒤로가기 아이콘'
                  size='20'
                  className='cursor-pointer'
                />
              ) : (
                <div className='w-[2rem]' />
              )}
              <Text sizes='16' weight='700'>
                {title}
              </Text>
              <Icon
                onClick={() => onClose()}
                src='/icons/system-icon/x.svg'
                alt='close icon'
                size='20'
                className='cursor-pointer'
              />
            </FlexBox>
            <div className='hide-scrollbar overflow-y-scroll overscroll-contain'>{children}</div>
            {isButtonShow && (
              <Button
                type={buttonType}
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
