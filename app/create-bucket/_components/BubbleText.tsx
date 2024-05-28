import React from 'react';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import { cn } from '@/utils/twMerge';
import { getStepConfig } from '../createBucketConfig';

type BubbleTextProps = {
  currentStep: string | undefined;
};

const BubbleText = ({ currentStep }: BubbleTextProps) => {
  const stepIndex = Number(currentStep);
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
          const isActiveStep = stepIndex === idx + 1;
          const currentStepWidthClass = isActiveStep
            ? ' px-[0.8rem] py-[0.4rem]'
            : 'w-[1.6rem] h-[1.6rem] ';
          const overStepBgClass = stepIndex >= idx + 1 ? 'bg-gray-700' : 'bg-gray-300';

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
                {stepIndex === idx + 1 && <Text sizes='12'>{stepText}</Text>}
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
