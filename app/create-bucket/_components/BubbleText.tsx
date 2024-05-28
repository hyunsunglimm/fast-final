import React from 'react';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import { cn } from '@/utils/twMerge';

type BubbleTextProps = {
  currentStep: string | undefined;
};
type CreateBucketStep = {
  title: string;
  stepText: string;
  imgSrc: string;
};
type CreateBucketConfigType = { [key: number]: CreateBucketStep };

export const createBucketConfig: CreateBucketConfigType = {
  0: {
    title: '당신의 버킷리스트는 무엇인가요?',
    stepText: '목표설정',
    imgSrc: '/images/create-bucket/flow-1.png'
  },
  1: {
    title: '출금통장과 저축통장을 선택해주세요',
    stepText: '통장설정',
    imgSrc: '/images/create-bucket/flow-2.png'
  },
  2: {
    title: '매주 저축할 금액과 날짜를 선택해주세요',
    stepText: '규칙설정',
    imgSrc: '/images/create-bucket/flow-3.png'
  },
  3: {
    title: '단순 저축으로만 달성하기 힘들다면 <br/> 이용중인 상품도 포함시켜보세요',
    stepText: '상품연결',
    imgSrc: '/images/create-bucket/flow-4.png'
  }
};

export const getStepConfig = (step: string | undefined): CreateBucketStep => {
  const stepIndex = step ? Number(step) : 0;
  return createBucketConfig[stepIndex];
};

const BubbleText = ({ currentStep }: BubbleTextProps) => {
  const stepIndex = currentStep ? Number(currentStep) : 0;
  const { title, stepText } = getStepConfig(currentStep);

  return (
    <FlexBox
      className='w-full gap-16'
      justifyContent='center'
      flexDirection='col'
      alignItems='center'
    >
      <FlexBox alignItems='center'>
        {[...Array(4)].map((_, idx) => {
          const isActiveStep = stepIndex === idx;
          const currentStepWidthClass = isActiveStep
            ? ' px-[0.8rem] py-[0.4rem]'
            : 'w-[1.6rem] h-[1.6rem] ';
          const overStepBgClass = stepIndex >= idx ? 'bg-gray-700' : 'bg-gray-300';

          return (
            <React.Fragment key={idx}>
              {idx > 0 && <div className={cn('h-[0.1rem] w-[2.4rem]', overStepBgClass)}></div>}
              <FlexBox
                alignItems='center'
                className={cn(
                  'rounded-full text-white transition-transform duration-200',
                  currentStepWidthClass,
                  overStepBgClass
                )}
              >
                {stepIndex === idx && <Text sizes='12'>{stepText}</Text>}
              </FlexBox>
            </React.Fragment>
          );
        })}
      </FlexBox>
      <FlexBox className='h-[5.6rem]'>
        <Text
          sizes='20'
          weight='600'
          className='text-center'
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </FlexBox>
    </FlexBox>
  );
};
export default BubbleText;
