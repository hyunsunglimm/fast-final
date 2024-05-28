import React from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const NextButton = ({ currentStep }: { currentStep: string | undefined }) => {
  const linkHref = currentStep
    ? `/create-bucket?step=${Number(currentStep) + 1}`
    : '/create-bucket?step=1';

  return (
    <Button asChild size='lg' className='w-full'>
      <Link href={linkHref} className='text-16 font-400'>
        다음
      </Link>
    </Button>
  );
};

export default NextButton;
