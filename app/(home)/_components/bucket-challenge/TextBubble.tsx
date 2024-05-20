import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';

type TextBubbleProps = {
  amounts: number;
  date: string;
  className?: string;
  isChallenge: boolean;
};

export const TextBubble = ({ amounts, date, className, isChallenge }: TextBubbleProps) => {
  const txtColor = isChallenge ? 'text-primary' : 'text-active';
  const afterClass =
    'after:absolute after:bottom-[-1rem] after:left-1/4 after:h-[1rem] after:w-[1rem] after:border-b-[0.5rem] after:border-l-[0.5rem] after:border-r-[0.5rem] after:border-t-[0.5rem] after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-white';
  return (
    <FlexBox
      alignItems='center'
      className={`${className} ${afterClass} bottom-bubble relative gap-x-[0.8rem] rounded-full bg-white px-[1rem] py-[0.8rem]`}
    >
      <Text weight='500' className={`${txtColor}`}>
        +{amounts.toLocaleString('ko')}원
      </Text>
      <Text weight='400' sizes='10' className='text-gray-500'>
        {date}
      </Text>
    </FlexBox>
  );
};
