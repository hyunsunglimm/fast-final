import React from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import FlexBox, { flexBoxVariants } from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';

const DetailHeader = () => {
  return (
    <header
      className={flexBoxVariants({
        justifyContent: 'between',
        alignItems: 'center',
        className: 'h-[5.6rem] px-20'
      })}
    >
      <Link href='/' aria-label='뒤로 가기 링크'>
        <Icon aria-hidden size='24' alt='뒤로가기' src='/icons/system-icon/arrow/arrow-prev.svg' />
      </Link>
      <FlexBox justifyContent='center'>
        <Text variant='h6' sizes='16' weight='700'>
          버킷리스트
        </Text>
      </FlexBox>
      <div className='w-[2.4rem]' aria-hidden></div>
    </header>
  );
};

export default DetailHeader;
