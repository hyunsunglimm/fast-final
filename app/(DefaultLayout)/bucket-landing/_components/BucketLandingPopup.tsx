import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type BucketLandingPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BucketLandingPopup = ({ isOpen, onClose }: BucketLandingPopupProps) => {
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
            className='relative flex max-h-[80%] w-full flex-col items-center rounded-t-lg bg-white px-16 pb-16 pt-40 xs:w-[520px]'
          >
            <Image
              src='/images/not-found-porko.webp'
              alt='거부하는 porko'
              width={400}
              height={140}
              className='mb-24 w-[14rem]'
            />
            <Text sizes='20' weight='700' className='mb-8 text-center'>
              버킷리스트를 <br /> 먼저 생성해주세요!
            </Text>
            <Text className='mb-40 text-center'>
              나만의 규칙은 버킷리스트를 생성하신 후<br /> 이용이 가능해요
            </Text>
            <Button asChild className='mb-16'>
              <Link href='/create-bucket'>
                <Text sizes='18' weight='700'>
                  버킷리스트 생성하기
                </Text>
              </Link>
            </Button>
            <Button styled='fill_gray' onClick={onClose}>
              <Text sizes='18' weight='700'>
                확인
              </Text>
            </Button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default BucketLandingPopup;
