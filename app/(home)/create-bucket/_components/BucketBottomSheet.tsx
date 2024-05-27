'use client';
import React from 'react';
import { motion } from 'framer-motion';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Icon from '@/components/Icon';

const BucketBottomSheet = () => {
  return (
    <section className='fixed bottom-0 min-h-fit w-full rounded-t-lg bg-white px-20 pb-20 text-center sm:w-[520px]'>
      <motion.div className='relative flex max-h-[50vh] flex-col items-center' drag='y'>
        <div className='mt-8 w-full pb-16 pt-8'>
          <FlexBox
            role='button'
            className='mx-auto h-[0.4rem] w-[4.8rem] touch-none rounded-full bg-gray-300 px-20'
          />
        </div>
        <Text sizes='16' weight='500' className='my-8'>
          저축 내역
        </Text>
        <FlexBox
          flexDirection='col'
          justifyContent='between'
          className='hide-scrollbar w-full gap-y-24 overflow-y-scroll overscroll-contain pb-[8rem]'
        >
          {[...Array(20)].map((_, index) => {
            return (
              <FlexBox
                flexDirection='col'
                justifyContent='between'
                className='w-full gap-y-16'
                key={index}
              >
                <Text sizes='12' className='text-gray-700'>
                  5월 16일
                </Text>
                <FlexBox justifyContent='between' className='w-full '>
                  <FlexBox alignItems='center' className='gap-x-16'>
                    <Icon src='/icons/logos/bank/bank-bc.svg' alt='아이콘' size='40' />
                    <FlexBox flexDirection='col'>
                      <Text sizes='16'>포코</Text>
                      <Text>18:40</Text>
                    </FlexBox>
                  </FlexBox>
                  <FlexBox flexDirection='col' alignItems='end'>
                    <Text sizes='16' weight='700'>
                      50000원
                    </Text>
                    <Text>50000원</Text>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            );
          })}
        </FlexBox>
        <Button size='md' className='absolute bottom-0 bg-black'>
          저축하기
        </Button>
      </motion.div>
    </section>
  );
};

export default BucketBottomSheet;
