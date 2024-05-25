'use client';
import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import React from 'react';
import Icon from '@/components/Icon';
import Text from '@/components/ui/Text';
import { useRouter } from 'next/navigation';

type CurrentStep = '1' | '2' | '3' | '4';

type SignupHeaderProps = {
  currentStep: CurrentStep;
  pushPath?: string;
  title: string;
};

const SignupHeader = ({ currentStep, pushPath, title }: SignupHeaderProps) => {
  const router = useRouter();
  return (
    <>
      {/* 헤더 */}
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

      {/* 타이틀 문구 */}
      <FlexBox className='space-y-2' flexDirection='col'>
        {currentStep !== '4' ? (
          <StepOneTwoThreeTitle currentStep={currentStep} />
        ) : (
          <StepFourTitle />
        )}
      </FlexBox>
    </>
  );
};
export default SignupHeader;

const StepOneTwoThreeTitle = ({ currentStep }: { currentStep: CurrentStep }) => {
  return (
    <>
      <Text variant='h2' sizes='20' weight='700'>
        회원가입을 위해
        <br /> 정보를 입력해주세요
      </Text>
      <Text className='text-gray-500' sizes='18' weight='500'>
        <span className='text-primary'>{currentStep}</span> / 3
      </Text>
    </>
  );
};

const StepFourTitle = () => {
  return (
    <Text variant='h2' sizes='20' weight='700'>
      이용약관을 확인하고
      <br /> 동의해주세요
    </Text>
  );
};
