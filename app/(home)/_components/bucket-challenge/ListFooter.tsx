import { CardFooter } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { ProgressBar } from '@/components/ProgressBar';

type ListFooterProps = {
  targetAmount: number;
  currentAmount: number;
};

export const ListFooter = ({ currentAmount, targetAmount }: ListFooterProps) => {
  const progressPercent = (currentAmount / targetAmount) * 100;
  return (
    <CardFooter className='flex-col px-24 pb-24'>
      <FlexBox justifyContent='between' alignItems='end' className='mb-[1rem] w-full'>
        <p>
          <Text sizes='18' weight='700'>
            {currentAmount.toLocaleString('ko')}&nbsp;
          </Text>
          <Text weight='500'>/ {targetAmount.toLocaleString('ko')}원</Text>
        </p>
        <Text>12일째</Text>
      </FlexBox>
      <div className='h-[0.8rem] w-full rounded-full bg-gray-300/50'>
        <ProgressBar barColor='white' progressPercent={progressPercent} />
      </div>
    </CardFooter>
  );
};
