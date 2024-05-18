import { CardFooter } from '@/components/ui/card';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { ProgressBar } from './ProgressBar';

type BucketListFooterProps = {
  targetAmount: number;
  currentAmount: number;
};

export const BucketListFooter = ({ currentAmount, targetAmount }: BucketListFooterProps) => {
  const progressPercent = (currentAmount / targetAmount) * 100;
  return (
    <CardFooter className='flex-col px-[1.6rem] pb-[2.2rem]'>
      <FlexBox justifyContent='between' alignItems='end' className='mb-[0.6rem] w-full'>
        <p>
          <Text sizes='18' weight='700'>
            {currentAmount.toLocaleString('ko')}&nbsp;
          </Text>
          <Text weight='500'>/ {targetAmount.toLocaleString('ko')}원</Text>
        </p>
        <Text>12일째</Text>
      </FlexBox>
      <ProgressBar progressPercent={progressPercent} />
    </CardFooter>
  );
};
