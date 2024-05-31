'use client';

import FlexBox from '@/components/ui/FlexBox';
import Tab from '@/components/ui/Tab';
import Text from '@/components/ui/Text';
import SavingCard from '../../_components/SavingCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/Icon';
import { getSavings } from '@/service/api/financial-product/savings';
import { useQuery } from '@tanstack/react-query';
import Spinner from '@/components/Spinner';

const PerfectFinancialProductSection = () => {
  const { data: savings, isPending } = useQuery({
    queryKey: ['savings'],
    queryFn: getSavings
  });

  return (
    <section className='px-20 py-40'>
      <FlexBox justifyContent='between' alignItems='center'>
        <Text variant='h2' sizes='20' weight='600'>
          꼭 맞는 금융상품
        </Text>
        <FlexBox alignItems='center'>
          <Text sizes='12'>전체보기</Text>
          <Icon src='/icons/system-icon/arrow/arrow-right.svg' alt='next icon' size='16' />
        </FlexBox>
      </FlexBox>
      <div className='mb-16 mt-20'>
        <Tab type='box' array={['예적금', '카드', '대출', '청약']} tabKey='tab' />
      </div>
      {isPending ? (
        <FlexBox justifyContent='center'>
          <Spinner />
        </FlexBox>
      ) : (
        <ul className='mb-24 flex flex-col gap-[1.2rem]'>
          {savings?.map((saving) => {
            return (
              <li key={saving.title}>
                <SavingCard saving={saving} />
              </li>
            );
          })}
        </ul>
      )}
      {savings && (
        <Button size='md' styled='outline'>
          더보기
        </Button>
      )}
    </section>
  );
};

export default PerfectFinancialProductSection;
