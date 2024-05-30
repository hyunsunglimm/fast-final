import Text from '@/components/ui/Text';
import SavingCard from '../../_components/SavingCard';
import { IsBackHeader } from '@/components/header';
import { getSavings } from '@/service/api/financial-product/savings';

const page = async () => {
  const savings = await getSavings();
  return (
    <>
      <IsBackHeader href='./' defaultColor='#f2f4f6' />
      <main className='bg-gray-50 px-[2rem] pb-[6rem]'>
        <Text variant='h1' sizes='24' weight='600'>
          올 겨울에 6개월 적금 들고 <br /> 내년 여름 여행가자
        </Text>
        <Text variant='h2' sizes='16' className='mb-28 mt-[0.8rem] text-gray-700'>
          단기 적금으로 여행 경비를 모으고 싶다면!
        </Text>
        <ul className='flex flex-col gap-[1.2rem]'>
          {savings.map((saving) => {
            return (
              <li key={saving.title}>
                <SavingCard saving={saving} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default page;
