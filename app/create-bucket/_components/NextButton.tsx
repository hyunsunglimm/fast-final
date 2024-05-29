'use client';
import React, { MouseEvent } from 'react';
import Button from '@/components/ui/Button';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getLinkHref } from '../util';

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
  const searchParams = useSearchParams();
  const transNumberStep = Number(currentStep);
  const linkHref = getLinkHref(transNumberStep, 1, searchParams);

  const handleDisabledAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Button
        asChild={asChild}
        disabled={disabled}
        type={type}
        size='lg'
        styled='fill_black'
        className='mt-24 w-full text-16 font-400'
      >
        {transNumberStep < 4 ? (
          <Link href={linkHref} onClick={handleDisabledAnchorClick}>
            {buttonLabel}
          </Link>
        ) : (
          buttonLabel
        )}
      </Button>
    </>
  );
};

export default NextButton;
