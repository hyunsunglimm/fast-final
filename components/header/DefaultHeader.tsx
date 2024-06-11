'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { HTMLAttributes, useState } from 'react';
import { User } from 'next-auth';
import FlexBox, { flexBoxVariants } from '../ui/FlexBox';
import Text from '../ui/Text';
import Image from 'next/image';
import Icon from '../Icon';
import { cn } from '@/shared/utils/twMerge';
import { logout } from '@/shared/actions/auth';
import Link from 'next/link';
import TextButton from '../ui/TextButton';
import { useRouter } from 'next/navigation';

type DefaultHeaderProps = {
  userData?: User;
  isHome?: boolean;
  title?: string;
  defaultColor?: string;
  isFixed?: boolean;
} & HTMLAttributes<HTMLElement>;

export const DefaultHeader = ({
  isHome = false,
  title,
  defaultColor,
  isFixed = true,
  userData
}: DefaultHeaderProps) => {
  const { scrollY } = useScroll();
  const headerColor = useTransform(
    scrollY,
    [0, 1],
    [`${defaultColor || 'transparent'}`, '#ffffff']
  );
  const router = useRouter();
  const fixedClass = isFixed ? 'sticky top-0 z-20' : '';
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <motion.header
      style={{ backgroundColor: headerColor }}
      className={cn(
        flexBoxVariants({
          justifyContent: 'between',
          alignItems: 'center'
        }),
        `${fixedClass} h-[5.6rem] px-20`
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
              className='cursor-pointer active:scale-95 active:ring-1 active:ring-active active:ring-offset-1'
              aria-hidden
            />
          </Link>
        ) : null}

        <div className='relative inline-block text-left'>
          <Icon
            onClick={() => setOpenDropdown((prev) => !prev)}
            src={userData?.image ?? '/icons/profile/profile.svg'}
            alt='프로필 이미지'
            size='24'
            className='cursor-pointer active:scale-95 active:ring-1 active:ring-active active:ring-offset-1'
          />

          {/* dropdown */}
          <AnimatePresence>
            {openDropdown && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='absolute right-0 z-10 mt-2 w-[8rem] origin-top-right rounded-md bg-white px-8 py-8 text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='menu-button'
              >
                <TextButton
                  onClick={() => (userData ? logout() : router.push('/auth/login'))}
                  type='button'
                  role='menuitem'
                  className='min-w-fit text-14'
                >
                  {userData ? 'Sign out' : 'Sign in'}
                </TextButton>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </FlexBox>
    </motion.header>
  );
};
