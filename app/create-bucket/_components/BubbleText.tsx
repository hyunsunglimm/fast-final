import React from 'react';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import { cn } from '@/shared/utils/twMerge';
import { getStepConfig } from '../createBucketConfig';

type BubbleTextProps = {
  currentStep: string | undefined;
};

const BubbleText = ({ currentStep }: BubbleTextProps) => {
  const currentStepIndex = Number(currentStep);
  const { title } = getStepConfig(currentStep);

  return (
    <FlexBox
      className='w-full gap-16'
      justifyContent='center'
      flexDirection='col'
      alignItems='center'
    >
      <FlexBox alignItems='center' className='gap-x-4'>
        {[...Array(4)].map((_, idx) => {
          const overStepBgClass =
            currentStepIndex === idx + 1
              ? 'bg-primary text-white border-none'
              : currentStepIndex < idx + 1
                ? 'border border-gray-300 text-gray-300'
                : 'bg-gray-300 text-white';

          return (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <FlexBox className='gap-x-2'>
                  <span className='h-[0.2rem] w-[0.2rem] rounded-full bg-gray-300'></span>
                  <span className='h-[0.2rem] w-[0.2rem] rounded-full bg-gray-300'></span>
                  <span className='h-[0.2rem] w-[0.2rem] rounded-full bg-gray-300'></span>
                </FlexBox>
              )}

              <FlexBox
                alignItems='center'
                justifyContent='center'
                className={cn(
                  'h-[2.4rem] w-[2.4rem] rounded-full transition-transform duration-200',
                  overStepBgClass
                )}
              >
                <Text sizes='12' weight='700'>
                  {idx + 1}
                </Text>
              </FlexBox>
            </React.Fragment>
          );
        })}
      </FlexBox>
      <FlexBox className='h-[5.6rem]'>
        <Text
          variant='h3'
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
