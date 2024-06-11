'use client';

import FlexBox, { flexBoxVariants } from '../ui/FlexBox';
import Text from '../ui/Text';
import Image from 'next/image';
import Icon from '../Icon';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HTMLAttributes } from 'react';
import { cn } from '@/shared/utils/twMerge';
import { useUserSession } from '@/shared/hooks/useUserSession';
import Link from 'next/link';

type DefaultHeaderProps = {
  isHome?: boolean;
  title?: string;
  defaultColor?: string;
  isFixed?: boolean;
} & HTMLAttributes<HTMLElement>;

export const DefaultHeader = ({
  isHome = false,
  title,
  defaultColor,
  isFixed = true
}: DefaultHeaderProps) => {
  const { scrollY } = useScroll();
  const userData = useUserSession();

  const headerColor = useTransform(
    scrollY,
    [0, 1],
    [`${defaultColor || 'transparent'}`, '#ffffff']
  );
  const fixedClass = isFixed ? 'sticky top-0 z-20' : '';
  return (
    <motion.header
      style={{ backgroundColor: headerColor }}
      className={cn(
        flexBoxVariants({
          justifyContent: 'between',
          alignItems: 'center'
        }),
        `${fixedClass} h-[5.6rem] px-20 backdrop-filter`
      )}
    >
      {isHome ? (
        <div
          className='relative h-[1.96rem] w-[8.442rem] cursor-pointer'
          aria-label='PORKO 로고 이미지'
        >
          <Image src='/images/porko-logo.svg' fill alt='PORKO 로고 이미지' sizes='auto' priority />
        </div>
      ) : (
        <Text variant='h2' sizes='20' weight='800'>
          {title}
        </Text>
      )}
      <FlexBox className='gap-x-12'>
        {userData ? (
          <Link href='/notification' aria-label='알림 페이지로 이동'>
            <Icon
              src='/icons/system-icon/header/header-alarm-on.svg'
              alt='알람 아이콘'
              size='24'
              className='cursor-pointer'
              aria-hidden
            />
          </Link>
        ) : null}

        <Icon
          src={userData?.image ?? '/icons/profile/profile.svg'}
          alt='프로필 이미지'
          size='24'
          className='cursor-pointer'
        />
      </FlexBox>
    </motion.header>
  );
};
