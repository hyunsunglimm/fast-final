import FlexBox from './ui/FlexBox';
import { ArrowBackIcon, ProfileIcon, NotiIcon } from './icons';
import Text from './ui/Text';
import Link from 'next/link';

type DefaultHeaderProps = {
  isHome?: boolean;
  title?: string;
};

export const DefaultHeader = ({ isHome = false, title }: DefaultHeaderProps) => {
  return (
    <FlexBox justifyContent='between' alignItems='center' className='h-[5.6rem] px-20'>
      {isHome ? (
        'logo'
      ) : (
        <Text sizes='20' weight='800'>
          {title}
        </Text>
      )}
      <FlexBox className='gap-x-[1.2rem]'>
        <NotiIcon />
        <ProfileIcon />
      </FlexBox>
    </FlexBox>
  );
};

type HeaderProps = {
  title?: string;
  href: string;
};

export const IsBackHeader = ({ title, href }: HeaderProps) => {
  return (
    <FlexBox
      alignItems='center'
      justifyContent='between'
      className='mb-[2rem] h-[5.6rem] px-[2rem]'
    >
      <div className='w-[2.4rem] cursor-pointer'>
        <Link href={href}>
          <ArrowBackIcon />
        </Link>
      </div>
      <FlexBox justifyContent='center'>
        <Text variant='h6' sizes='16' weight='700'>
          {title}
        </Text>
      </FlexBox>
      <div className='w-[2.4rem]' aria-hidden></div>
    </FlexBox>
  );
};
