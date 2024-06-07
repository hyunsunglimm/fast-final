import Spinner from '@/components/Spinner';
import Button from '@/components/ui/Button';
import { useRouter, useSearchParams } from 'next/navigation';

type BottomButtonProps = {
  path: string;
  isLoading?: boolean;
  onClick?: () => void;
  styled?: 'fill_black' | 'fill_blue';
  children: React.ReactNode;
};

const BottomButton = ({
  path,
  isLoading = false,
  onClick,
  styled = 'fill_black',
  children
}: BottomButtonProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className='fixed bottom-0 left-0 right-0 z-10 mx-auto bg-gradient-to-t from-gray-200 to-white/20 px-20 py-32 xs:w-[520px]'>
      <Button
        disabled={isLoading}
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
  );
};

export default BottomButton;
