import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import Image from 'next/image';
import FlexBox from '@/components/ui/FlexBox';
import ProgressBar from './ProgressBar';
import TextBubble from './TextBubble';

type BucketListCardProps = {
  badgeText: string;
  headerText: string;
  subHeaderText?: string;
  imagePath: string;
  targetAmount: number;
  currentAmount: number;
  isChallenge: boolean;
};

const BucketListCard = ({
  badgeText,
  headerText,
  subHeaderText,
  imagePath,
  targetAmount,
  currentAmount,
  isChallenge
}: BucketListCardProps) => {
  const progressPercent = (currentAmount / targetAmount) * 100;
  const bgColor = isChallenge ? 'bg-[#FF8B4A]' : 'bg-[#4AA8FF]';
  return (
    <Card className={`aspect-square ${bgColor} text-white`}>
      <CardHeader className='p-[1.6rem]'>
        <div className='flex w-fit items-center rounded-xl bg-indigo-900 px-[8px] py-[6px]'>
          <Text sizes='10'>{badgeText}</Text>
        </div>
      </CardHeader>
      <CardContent
        flexDirection='col'
        alignItems='start'
        justifyContent='between'
        className='relative pl-[1.6rem] pr-0'
      >
        <Text sizes='20' weight='bold'>
          {headerText}
        </Text>
        {subHeaderText && (
          <Text sizes='20' weight='bold' className='absolute mt-10 block'>
            {subHeaderText}
          </Text>
        )}
        <FlexBox
          justifyContent='between'
          alignItems='end'
          className='min-h-fit w-full gap-x-[2.1rem] px-0'
        >
          <FlexBox
            flexDirection='col'
            className='mb-[1rem] h-full w-[14.9rem] shrink-0 gap-y-[2rem]'
          >
            <TextBubble
              isChallenge={isChallenge}
              amounts={15000}
              date='5월2일'
              className='ml-auto'
            />
            <TextBubble isChallenge={isChallenge} amounts={15000} date='5월2일' />
          </FlexBox>
          <div className='relative h-[19.4rem] w-[20.2rem] overflow-hidden'>
            <Image
              src={imagePath}
              fill
              alt={badgeText}
              title={`${badgeText} 이미지`}
              sizes='auto'
              priority
              className='object-cover'
            />
          </div>
        </FlexBox>
      </CardContent>
      <CardFooter className='flex-col px-[1.6rem]'>
        <FlexBox justifyContent='between' alignItems='end' className='mb-[0.6rem] w-full'>
          <p>
            <Text sizes='18'>{currentAmount.toLocaleString('kr')}&nbsp;</Text>
            <Text weight='regular'>/ {targetAmount.toLocaleString('kr')}원</Text>
          </p>
          <Text>12일째</Text>
        </FlexBox>
        <ProgressBar progressPercent={progressPercent} />
      </CardFooter>
    </Card>
  );
};

export default BucketListCard;
