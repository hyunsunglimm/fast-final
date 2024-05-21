import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';

type TextBubbleProps = {
  amounts: number;
  date: string;
  className?: string;
  textColor: 'bucket' | 'challenge';
};

export const TextBubble = ({ amounts, date, className, textColor }: TextBubbleProps) => {
  const textColorClass = textColor === 'bucket' ? 'text-bucket' : 'text-challenge';

  return (
    <FlexBox
      alignItems='center'
      className={`${className} bottom-bubble relative gap-x-[0.8rem] rounded-full rounded-bl-none bg-white px-[1rem] py-[0.6rem]`}
    >
      <Text weight='500' className={`${textColorClass}`}>
        +{amounts.toLocaleString('ko')}원
      </Text>
      <Text weight='400' sizes='10' className='text-gray-500'>
        {date}
      </Text>
    </FlexBox>
  );
};
