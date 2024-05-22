import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const BottomButton = () => {
  const searchParams = useSearchParams();
  const tab1 = searchParams.get('tab1');
  const tab2 = searchParams.get('tab2');
  const selectedCards = searchParams.getAll('card');

  return (
    <div className='fixed bottom-0 left-0 right-0 mx-auto bg-gradient-to-t from-gray-200 to-white/20 px-20 py-32 xs:w-[520px]'>
      <Link
        href={`/financial-product/comparison/select-category?tab1=${tab1}&tab2=${tab2}&card=${selectedCards[0]}&card=${selectedCards[1]}`}
      >
        <Button size='lg' styled='fill_black'>
          비교하기
        </Button>
      </Link>
    </div>
  );
};

export default BottomButton;
