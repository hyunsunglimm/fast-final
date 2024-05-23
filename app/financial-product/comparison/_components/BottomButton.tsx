import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type BottomButtonProps = {
  title: string;
  path: string;
};

const BottomButton = ({ title, path }: BottomButtonProps) => {
  const searchParams = useSearchParams();

  return (
    <div className='fixed bottom-0 left-0 right-0 mx-auto bg-gradient-to-t from-gray-200 to-white/20 px-20 py-32 xs:w-[520px]'>
      <Link href={`${path}?${searchParams.toString()}`}>
        <Button size='lg' styled='fill_black'>
          {title}
        </Button>
      </Link>
    </div>
  );
};

export default BottomButton;
