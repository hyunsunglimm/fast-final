import FlexBox, { flexBoxVariants } from '../ui/FlexBox';
import Text from '../ui/Text';
import Icon from '../Icon';
import Link from 'next/link';

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
        className: 'h-[5.6rem] px-20'
      })}
    >
      <Link href={href} aria-label='뒤로 가기 링크'>
        <Icon aria-hidden size='24' alt='뒤로가기' src='/icons/system-icon/arrow/arrow-prev.svg' />
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
