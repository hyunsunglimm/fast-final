'use client';
import React from 'react';
import Button from '@/components/ui/Button';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getLinkHref } from '../util';

const NextButton = ({ currentStep }: { currentStep: string | undefined }) => {
  const searchParams = useSearchParams();
  const transNumberStep = Number(currentStep);
  const linkHref = getLinkHref(transNumberStep, 1, searchParams);

  return (
    <>
      {transNumberStep < 4 ? (
        <Button asChild size='lg' className='mt-24 w-full'>
          <Link href={linkHref}>다음</Link>
        </Button>
      ) : (
        <Button type='submit' size='lg' className='mt-24 w-full text-16 font-400 '>
          완료
        </Button>
      )}
    </>
  );
};

export default NextButton;
