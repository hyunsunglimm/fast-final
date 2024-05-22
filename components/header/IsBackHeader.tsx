'use client';
import FlexBox, { flexBoxVariants } from '../ui/FlexBox';
import Text from '../ui/Text';
import { useRouter } from 'next/navigation';
import Icon from '../Icon';

type HeaderProps = {
  title?: string;
};

export const IsBackHeader = ({ title }: HeaderProps) => {
  const router = useRouter();
  return (
    <header
      className={flexBoxVariants({
        justifyContent: 'between',
        alignItems: 'center',
        className: 'mb-[2rem] h-[5.6rem] px-[2rem]'
      })}
    >
      <Icon
        size='24'
        role='button'
        alt='뒤로가기'
        src='/icons/system-icon/arrow/arrow-prev.svg'
        onClick={() => router.back()}
      />

      <FlexBox justifyContent='center'>
        <Text variant='h6' sizes='16' weight='700'>
          {title}
        </Text>
      </FlexBox>
      <div className='w-[2.4rem]' aria-hidden></div>
    </header>
  );
};
