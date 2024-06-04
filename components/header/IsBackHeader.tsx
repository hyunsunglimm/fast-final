'use client';

import FlexBox, { flexBoxVariants } from '../ui/FlexBox';
import Text from '../ui/Text';
import Icon from '../Icon';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import IconButton from '../ui/IconButton';

type HeaderProps = {
  title?: string;
  href: string;
  defaultColor?: string;
  isFixed?: boolean;
  isClose?: boolean;
};

export const IsBackHeader = ({
  title,
  href,
  defaultColor,
  isFixed = true,
  isClose = false
}: HeaderProps) => {
  const { scrollY } = useScroll();

  const headerColor = useTransform(
    scrollY,
    [0, 1],
    [`${defaultColor || 'transparent'}`, '#ffffff96']
  );

  return (
    <motion.header
      style={{ backgroundColor: headerColor }}
      className={flexBoxVariants({
        justifyContent: 'between',
        alignItems: 'center',
        className: `${isFixed && 'sticky top-0 z-20'} h-[5.6rem] border-b border-b-gray-100 px-20 backdrop-blur-lg`
      })}
    >
      {!isClose ? (
        <Link href={href} aria-label='뒤로 가기 링크' scroll={false}>
          <Icon
            aria-hidden
            size='24'
            alt='뒤로가기'
            src='/icons/system-icon/arrow/arrow-prev.svg'
          />
        </Link>
      ) : (
        <div className='w-[2.4rem]' aria-hidden></div>
      )}
      <FlexBox justifyContent='center'>
        <Text variant='h6' sizes='16' weight='700'>
          {title}
        </Text>
      </FlexBox>
      {isClose ? (
        <IconButton asChild>
          <Link href={href} aria-label={`${href}로 이동`}>
            <Icon src='/icons/system-icon/x.svg' alt='취소 아이콘' size='20' aria-hidden />
          </Link>
        </IconButton>
      ) : (
        <div className='w-[2.4rem]' aria-hidden></div>
      )}
    </motion.header>
  );
};
