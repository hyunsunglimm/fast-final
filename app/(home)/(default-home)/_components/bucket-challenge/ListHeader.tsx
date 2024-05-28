import { CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import IconButton from '@/components/ui/IconButton';
type ListHeaderProps = {
  badgeText: string;
  headerText: string;
  subHeaderText?: string;
};

export const ListHeader = ({ badgeText, headerText, subHeaderText }: ListHeaderProps) => {
  return (
    <CardHeader className='p-[1.6rem] pb-0'>
      <FlexBox justifyContent='between' alignItems='center' className='mb-[1.2rem]'>
        <div className=' w-fit rounded-full bg-black/20 px-[0.8rem] py-[0.5rem]'>
          <Text sizes='12' weight='700'>
            {badgeText}
          </Text>
        </div>
        <IconButton asChild>
          <Icon src='/icons/home/three-dot.svg' alt='더 보기 아이콘' size='12' />
        </IconButton>
      </FlexBox>
      <FlexBox className='relative'>
        <Text sizes='20' weight='700'>
          {headerText}
        </Text>
        {subHeaderText && (
          <Text sizes='20' weight='700' className='absolute mt-24 block'>
            {subHeaderText}
          </Text>
        )}
      </FlexBox>
    </CardHeader>
  );
};
