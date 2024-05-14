import { CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
type BucketListHeaderProps = {
  badgeText: string;
  headerText: string;
  subHeaderText?: string;
};

export const BucketListHeader = ({
  badgeText,
  headerText,
  subHeaderText
}: BucketListHeaderProps) => {
  return (
    <CardHeader className='p-[1.6rem] pb-0'>
      <FlexBox className='mb-[1.2rem] w-fit rounded-2xl bg-indigo-900 px-[0.8rem] py-[0.6rem]'>
        <Text sizes='10'>{badgeText}</Text>
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
