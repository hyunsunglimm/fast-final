import FlexBox, { flexBoxVariants } from '../ui/FlexBox';
import Text from '../ui/Text';
import Image from 'next/image';
import Icon from '../Icon';
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
        <div className='relative h-[1.96rem] w-[8.442rem]' aria-label='PORKO 로고 이미지'>
          <Image src='/images/porko-logo.svg' fill alt='PORKO 로고 이미지' sizes='auto' priority />
        </div>
      ) : (
        <Text variant='h2' sizes='20' weight='800'>
          {title}
        </Text>
      )}
      <FlexBox className='gap-x-12'>
        <Icon src='/icons/system-icon/header/header-alarm.svg' alt='알람 아이콘' size='24' />
        <Icon src='/icons/profile/profile.svg' alt='프로필 아이콘' size='24' />
      </FlexBox>
    </header>
  );
};
