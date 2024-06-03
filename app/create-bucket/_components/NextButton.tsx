'use client';
import React, { MouseEvent } from 'react';
import Button from '@/components/ui/Button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useGetHref from '../hooks/useGetHref';

type NextButtonProps = {
  currentStep: string | undefined;
  buttonLabel: string;
  disabled?: boolean;
  type: HTMLButtonElement['type'];
  asChild?: boolean;
};

const NextButton = ({
  currentStep,
  buttonLabel,
  type = 'button',
  disabled = false,
  asChild
}: NextButtonProps) => {
  const { getLinkHref } = useGetHref();
  const pathname = usePathname();
  const transNumberStep = Number(currentStep);
  const nextStepHref = getLinkHref(transNumberStep, 1);

  const linkHref =
    transNumberStep < 4 ? pathname + nextStepHref : `${pathname}/result${nextStepHref}`;

  const handleDisabledAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <Button
      asChild={asChild}
      disabled={disabled}
      type={type}
      size='lg'
      styled='fill_black'
      className='w-full text-16 font-400'
    >
      <Link href={linkHref} onClick={handleDisabledAnchorClick}>
        {buttonLabel}
      </Link>
    </Button>
  );
};

export default NextButton;
