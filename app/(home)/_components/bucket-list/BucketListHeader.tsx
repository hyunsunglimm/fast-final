import { CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
type BucketListHeaderProps = {
  badgeText: string;
  headerText: string;
  subHeaderText?: string;
  isChallenge?: boolean;
};

export const BucketListHeader = ({
  badgeText,
  headerText,
  subHeaderText,
  isChallenge = true
}: BucketListHeaderProps) => {
  return (
    <CardHeader className='p-[1.6rem] pb-0'>
      <FlexBox justifyContent='between' className='mb-[1.2rem]'>
        <FlexBox alignItems='center' className='gap-x-[0.4rem]'>
          <div className=' w-fit rounded-2xl bg-indigo-900 px-[0.8rem] py-[0.6rem]'>
            <Text sizes='10'>{badgeText}</Text>
          </div>
          {isChallenge && <Text sizes='10'>감정 통장</Text>}
        </FlexBox>
        <div>. . .</div>
      </FlexBox>
      <FlexBox className='relative'>
        <Text sizes='20' weight='700'>
          {headerText}
        </Text>
        {subHeaderText && (
          <Text sizes='20' weight='700' className='absolute mt-10 block'>
            {subHeaderText}
          </Text>
        )}
      </FlexBox>
    </CardHeader>
  );
};
