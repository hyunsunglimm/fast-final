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
      <Button size='lg' styled='fill_black' asChild>
        <Link href={`${path}?${searchParams.toString()}`}>{title}</Link>
      </Button>
    </div>
  );
};

export default BottomButton;
