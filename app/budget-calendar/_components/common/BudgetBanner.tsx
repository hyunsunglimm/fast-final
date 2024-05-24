import Image from 'next/image';
import FlexBox from '@/components/ui/FlexBox';

const BudgetBanner = () => {
  return (
    <FlexBox
      alignItems='center'
      justifyContent='between'
      className='cursor-pointer rounded-md bg-banner p-16 text-14'
    >
      <FlexBox alignItems='center'>
        <div className='relative mr-12 h-[2.4rem] w-[2.4rem]'>
          <Image src='/icons/budget-calendar/small-pig.svg' alt='pig' fill />
        </div>
        <p>목표 예산 중 50%를 썼어요</p>
      </FlexBox>
      <div className='relative h-[1.6rem] w-[1.6rem]'>
        <Image src='/icons/system-icon/arrow/arrow-right-gray.svg' alt='오른쪽화살표' fill />
      </div>
    </FlexBox>
  );
};

export default BudgetBanner;
