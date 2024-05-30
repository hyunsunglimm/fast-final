import Button from '@/components/ui/Button';
import { useRouter, useSearchParams } from 'next/navigation';

type BottomButtonProps = {
  path: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const BottomButton = ({ path, onClick, children }: BottomButtonProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className='fixed bottom-0 left-0 right-0 mx-auto bg-gradient-to-t from-gray-200 to-white/20 px-20 py-32 xs:w-[520px]'>
      <Button
        size='lg'
        styled='fill_black'
        onClick={() => {
          if (onClick) {
            onClick();
          } else {
            router.push(`${path}?${searchParams.toString()}`);
          }
        }}
      >
        {children}
      </Button>
    </div>
  );
};

export default BottomButton;
