import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const BottomButton = () => {
  const searchParams = useSearchParams();
  const selectedCards = searchParams.getAll('select');

  return (
    <div className='fixed bottom-0 left-0 right-0 mx-auto bg-gradient-to-t from-gray-200 to-white/20 px-20 py-32 xs:w-[520px]'>
      <Link
        href={`/financial-product/comparison/select-category?select=${selectedCards[0]}&select=${selectedCards[1]}`}
      >
        <Button size='lg' styled='fill_black'>
          비교하기
        </Button>
      </Link>
    </div>
  );
};

export default BottomButton;
