import React from 'react';
import Icon from '@/components/Icon';
import IconButton from '@/components/ui/IconButton';
import Link from 'next/link';

const BucketFlowHeader = ({ currentStep }: { currentStep: string | undefined }) => {
  const numberStep = Number(currentStep);

  const justifyContent = numberStep > 1 ? 'justify-start' : 'justify-end';
  const linkHref = numberStep > 1 ? `/create-bucket?step=${numberStep - 1}` : '/create-bucket';
  return (
    <header className={`flex h-[5.6rem] w-full items-center ${justifyContent}`}>
      {numberStep > 1 ? (
        <IconButton asChild>
          <Link href={linkHref} aria-label='뒤로 가기'>
            <Icon src='/icons/system-icon/arrow/arrow-prev.svg' alt='뒤로가기 아이콘' aria-hidden />
          </Link>
        </IconButton>
      ) : (
        <IconButton asChild>
          <Link href='/' aria-label='홈으로 가기'>
            <Icon src='/icons/system-icon/x.svg' alt='취소 아이콘' size='20' aria-hidden />
          </Link>
        </IconButton>
      )}
    </header>
  );
};
export default BucketFlowHeader;
