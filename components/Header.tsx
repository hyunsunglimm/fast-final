import FlexBox, { flexBoxVariants } from './ui/FlexBox';
import { ArrowBackIcon, ProfileIcon, NotiIcon } from './icons';
import Text from './ui/Text';
import Link from 'next/link';

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
        'logo'
      ) : (
        <Text variant='h2' sizes='20' weight='800'>
          {title}
        </Text>
      )}
      <FlexBox className='gap-x-[1.2rem]'>
        <NotiIcon />
        <ProfileIcon />
      </FlexBox>
    </header>
  );
};

type HeaderProps = {
  title?: string;
  href: string;
};

export const IsBackHeader = ({ title, href }: HeaderProps) => {
  return (
    <header
      className={flexBoxVariants({
        justifyContent: 'between',
        alignItems: 'center',
        className: 'mb-[2rem] h-[5.6rem] px-[2rem]'
      })}
    >
      <Link aria-label='메인 페이지로 이동' href={href} className='w-[2.4rem] cursor-pointer'>
        <ArrowBackIcon aria-hidden />
      </Link>

      <FlexBox justifyContent='center'>
        <Text variant='h6' sizes='16' weight='700'>
          {title}
        </Text>
      </FlexBox>
      <div className='w-[2.4rem]' aria-hidden></div>
    </header>
  );
};
