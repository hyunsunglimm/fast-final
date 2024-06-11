'use client';
import { useState, useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import SwiperWrapper from '@/components/SwiperWrapper';
import Icon from '@/components/Icon';
import { motion, AnimatePresence } from 'framer-motion';
import { usePopupStore } from '@/store/popupStore';
const Popup = () => {
  const { openPopUp, setStorage } = usePopupStore();
  const [index, setIndex] = useState(0);
  const ref = useRef<{ next: () => void } | null>(null);

  const handleNextClick = () => {
    if (index === 0 && ref.current) {
      ref.current.next();
    } else if (index === 1) {
      setStorage(false);
    }
  };

  useEffect(() => {
    if (openPopUp) {
      document.body.classList.add('max-h-dvh');
      document.body.classList.add('overflow-hidden');
      document.body.classList.remove('overflow-y-scroll');
    } else {
      document.body.classList.remove('max-h-dvh');
      document.body.classList.remove('overflow-hidden');
      document.body.classList.add('overflow-y-scroll');
    }
    return () => {
      document.body.classList.remove('max-h-dvh');
      document.body.classList.remove('overflow-hidden');
      document.body.classList.add('overflow-y-scroll');
    };
  }, [openPopUp]);

  return (
    <AnimatePresence>
      {openPopUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='absolute inset-0 z-30 h-dvh bg-black/60'
        >
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='absolute bottom-0 w-full self-end rounded-lg bg-white p-24 text-center'
          >
            <SwiperWrapper dots={true} setIndex={setIndex} ref={ref}>
              <StepOne />
              <StepTwo />
            </SwiperWrapper>
            <Button
              size='sm'
              styled='fill_black'
              className='mt-32 w-full'
              onClick={handleNextClick}
            >
              {index === 0 ? '다음' : '모두 확인했어요'}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Popup;

const StepOne = () => {
  return (
    <FlexBox flexDirection='col' justifyContent='center' alignItems='center' className='w-full'>
      <Text sizes='20' weight='700'>
        가계부 혼자 봐요!
      </Text>
      <Text className='mt-8 text-gray-700'>
        소비 날씨 캘린더와 후회 소비 체크를 통해 <br /> 예산에 맞춰 소비할 수 있게 도와드려요
      </Text>
      <FlexBox className='mt-36 gap-16'>
        <Icon
          src='/icons/weather/consumption/weather-1.svg'
          alt='날씨 아이콘'
          className='h-[8rem] w-[8rem] bg-select p-4'
        />
        <FlexBox className='relative' alignItems='center' justifyContent='center'>
          <Icon
            src='/icons/weather/consumption/weather-none.svg'
            alt='날씨 아이콘'
            className='h-[8rem] w-[8rem]'
          />
          <Text className='absolute text-gray-300' sizes='48' weight='700'>
            ?
          </Text>
        </FlexBox>
        <Icon
          src='/icons/categories/background/categories-regret.svg'
          alt='후회소비 아이콘'
          className='h-[8rem] w-[8rem]'
        />
      </FlexBox>
    </FlexBox>
  );
};

const StepTwo = () => {
  return (
    <FlexBox flexDirection='col' justifyContent='center' alignItems='center' className='w-full'>
      <Text sizes='20' weight='700'>
        가계부 함께 봐요!
      </Text>
      <Text className='mt-8 text-gray-700'>
        소비 날씨 캘린더를 멤버들과 공유하면서 <br /> 재밌는 반응을 남기고 함께 도전해요
      </Text>
      <FlexBox className='mt-36 gap-16'>
        <FlexBox
          className='h-[8rem] w-[8rem] rounded-full border-4 border-primary bg-select text-[4.5rem]'
          alignItems='center'
          justifyContent='center'
        >
          🥳
        </FlexBox>
        <FlexBox
          className='h-[8rem] rounded-full bg-gray-50 px-20 text-[4.5rem]'
          alignItems='center'
        >
          🔥 <Text sizes='40'>&nbsp;999+</Text>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
