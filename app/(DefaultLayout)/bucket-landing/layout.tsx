import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import IconButton from '@/components/ui/IconButton';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import Link from 'next/link';

type BucketLadingLayoutProps = {
  children: React.ReactNode;
};

const BucketLadingLayout = ({ children }: BucketLadingLayoutProps) => {
  return (
    <>
      <header className='sticky top-0 z-20 bg-white'>
        <FlexBox justifyContent='between' alignItems='center' className='h-[5.6rem] bg-white px-20'>
          <div className='w-[2.4rem]' aria-hidden />
          <Text variant='h6' sizes='16' weight='700'>
            이용안내
          </Text>
          <IconButton
            asChild
            className='cursor-pointer active:scale-95 active:ring-1 active:ring-active active:ring-offset-1'
          >
            <Link href='/' aria-label='홈으로 이동'>
              <Icon src='/icons/system-icon/x.svg' alt='취소 아이콘' size='20' aria-hidden />
            </Link>
          </IconButton>
        </FlexBox>
        <Tab srollTop array={['저축생활 1편', '저축생활 2편']} type='underline' tabKey='tab' />
      </header>
      {children}
    </>
  );
};
export default BucketLadingLayout;
