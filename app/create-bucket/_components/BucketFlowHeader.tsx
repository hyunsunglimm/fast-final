'use client';
import React from 'react';
import Icon from '@/components/Icon';
import IconButton from '@/components/ui/IconButton';
import Link from 'next/link';
import useGetHref from '../hooks/useGetHref';

const BucketFlowHeader = ({ currentStep }: { currentStep: string | undefined }) => {
  const { getLinkHref } = useGetHref();
  const transNumberStep = Number(currentStep);
  const linkHref = getLinkHref(transNumberStep, -1);
  const justifyContent = transNumberStep > 1 ? 'justify-between' : 'justify-end';

  return (
    <div className={`relative z-10 flex h-[5.6rem] w-full items-center ${justifyContent}`}>
      {transNumberStep > 1 && (
        <IconButton asChild>
          <Link href={linkHref} aria-label='뒤로 가기'>
            <Icon src='/icons/system-icon/arrow/arrow-prev.svg' alt='뒤로가기 아이콘' aria-hidden />
          </Link>
        </IconButton>
      )}
      <IconButton asChild>
        <Link href='/' aria-label='홈으로 가기'>
          <Icon src='/icons/system-icon/x.svg' alt='취소 아이콘' size='20' aria-hidden />
        </Link>
      </IconButton>
    </div>
  );
};
export default BucketFlowHeader;
