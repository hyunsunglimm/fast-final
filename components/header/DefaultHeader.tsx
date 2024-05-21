import FlexBox, { flexBoxVariants } from '../ui/FlexBox';
import Text from '../ui/Text';
import Image from 'next/image';

type DefaultHeaderProps = {
  isHome?: boolean;
  title?: string;
};

export const DefaultHeader = ({ isHome = false, title }: DefaultHeaderProps) => {
  return (
    <header
      className={flexBoxVariants({
        justifyContent: 'between',
        alignItems: 'center',
        className: 'h-[5.6rem] px-20'
      })}
    >
      {isHome ? (
        <div className='relative h-[1.96rem] w-[8.442rem]'>
          <Image src='/images/logo.svg' fill alt='PORKO 로고 이미지' sizes='auto' />
        </div>
      ) : (
        <Text variant='h2' sizes='20' weight='800'>
          {title}
        </Text>
      )}
      <FlexBox className='gap-x-[1.2rem]'>
        <div className='relative h-[2.4rem] w-[2.4rem]'>
          <Image src='/images/header/header-alarm.svg' alt='알람 아이콘' fill sizes='auto' />
        </div>
        <div className='relative h-[2.4rem] w-[2.4rem]'>
          <Image src='/images/header/header-profile.svg' alt='프로필 아이콘' fill sizes='auto' />
        </div>
      </FlexBox>
    </header>
  );
};
