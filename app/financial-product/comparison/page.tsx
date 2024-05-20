'use client';

import { IsBackHeader } from '@/components/header';
import Tab from '@/components/ui/Tab';

const ComparisonPage = () => {
  return (
    <>
      <IsBackHeader title='상품비교' />
      <section>
        <div className='bg-white'>
          <Tab type='underline' array={['예적금', '대출', '카드', '보험']} tabKey='tab1' />
          <div className='px-20 py-16'>
            <Tab type='box' array={['신용카드', '체크카드']} tabKey='tab2' />
          </div>
        </div>
      </section>
    </>
  );
};

export default ComparisonPage;
