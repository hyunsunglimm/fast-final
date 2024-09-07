'use client';

import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import Image from 'next/image';

type SpeechBubbleHeaderProps = {
  id: number;
  annualBenefit: number;
};

const SpeechBubbleHeader = ({ id, annualBenefit }: SpeechBubbleHeaderProps) => {
  return (
    <section className='relative'>
      <div className='absolute z-10 w-full'>
        <Text sizes='40' weight='700' className='absolute right-[6rem] top-[-0.8rem] text-gray-200'>
          {'"'}
        </Text>
        <FlexBox justifyContent='center' className='text-center'>
          <Text sizes='16' weight='500'>
            연간{' '}
            <Text sizes='16' weight='800' className={id === 0 ? 'text-active' : 'text-warning'}>
              약 {annualBenefit.toLocaleString()}원
            </Text>
            의 혜택을 <br /> 받을 수 있어요
          </Text>
        </FlexBox>
        <Text sizes='40' weight='700' className='absolute left-[6rem] top-[-0.8rem] text-gray-200'>
          {'"'}
        </Text>
      </div>
      <Image
        src='/images/speech-bubble.png'
        alt='말풍선'
        width={530}
        height={290}
        className='absolute top-[-11rem] w-full'
        priority
      />
    </section>
  );
};

export default SpeechBubbleHeader;
