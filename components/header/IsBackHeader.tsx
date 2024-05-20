'use client';
import FlexBox, { flexBoxVariants } from '../ui/FlexBox';
import Text from '../ui/Text';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
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
      <div className='relative h-[2.4rem] w-[2.4rem]' role='button' onClick={() => router.back()}>
        <Image src='/images/arrow/arrow-prev.svg' alt='뒤로가기' aria-hidden fill sizes='auto' />
      </div>

      <FlexBox justifyContent='center'>
        <Text variant='h6' sizes='16' weight='700'>
          {title}
        </Text>
      </FlexBox>
      <div className='w-[2.4rem]' aria-hidden></div>
    </header>
  );
};
