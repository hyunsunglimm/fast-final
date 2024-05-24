import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import React from 'react';
import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';

type SignupHeaderProps = {
  currentStep?: string;
  onClick?: () => void;
};

const SignupHeader = ({ currentStep, onClick }: SignupHeaderProps) => {
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
          onClick={onClick}
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
          회원가입
        </Text>
      </FlexBox>
      <div className='w-[2.4rem]' aria-hidden></div>
    </header>
  );
};

export default SignupHeader;
