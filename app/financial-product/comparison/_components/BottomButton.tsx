import Spinner from '@/components/Spinner';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

type BottomButtonProps = {
  path: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  styled?: 'fill_black' | 'fill_blue';
  children: React.ReactNode;
};

const BottomButton = ({
  path,
  disabled = false,
  isLoading = false,
  onClick,
  styled = 'fill_black',
  children
}: BottomButtonProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className='fixed bottom-0 z-10 w-full xs:w-[520px]'>
      <Image
        src='/images/financial-product/bottom-gradation.webp'
        alt='바텀 그라데이션'
        width={500}
        height={125}
        className='w-full'
      />
      <div className='absolute bottom-1/2 w-full translate-y-[50%] px-20'>
        <Button
          disabled={disabled || isLoading}
          size='lg'
          styled={styled}
          onClick={() => {
            if (onClick) {
              onClick();
            } else {
              router.push(`${path}?${searchParams.toString()}`);
            }
          }}
        >
          {isLoading ? <Spinner /> : children}
        </Button>
      </div>
    </div>
  );
};

export default BottomButton;
