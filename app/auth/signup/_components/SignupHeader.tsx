'use client';
import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import React from 'react';
import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';
import { useRouter } from 'next/navigation';
type SignupHeaderProps = {
  currentStep?: string;
  pushPath?: string;
  title: string;
};

const SignupHeader = ({ currentStep, pushPath, title }: SignupHeaderProps) => {
  const router = useRouter();
  return (
    <header
      className={flexBoxVariants({
        justifyContent: 'between',
        alignItems: 'center',
        className: 'mb-40 h-[5.6rem]'
      })}
    >
      {currentStep !== '1' ? (
        <Icon
          role='button'
          onClick={() => router.push(pushPath || '')}
          size='24'
          alt='뒤로가기'
          src='/icons/system-icon/arrow/arrow-prev.svg'
          placeholder='empty'
        />
      ) : (
        <div className='w-[2.4rem]' aria-hidden></div>
      )}

      <FlexBox justifyContent='center'>
        <Text variant='h6' sizes='16' weight='500'>
          {title}
        </Text>
      </FlexBox>
      <div className='w-[2.4rem]' aria-hidden></div>
    </header>
  );
};
export default SignupHeader;
