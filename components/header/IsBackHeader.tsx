'use client';
import FlexBox, { flexBoxVariants } from '../ui/FlexBox';
import { ArrowBackIcon } from '../icons';
import Text from '../ui/Text';
import { useRouter } from 'next/navigation';

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
      <ArrowBackIcon role='button' onClick={() => router.back()} />

      <FlexBox justifyContent='center'>
        <Text variant='h6' sizes='16' weight='700'>
          {title}
        </Text>
      </FlexBox>
      <div className='w-[2.4rem]' aria-hidden></div>
    </header>
  );
};
