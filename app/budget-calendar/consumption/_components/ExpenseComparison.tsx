'use client';

import Tab from '@/components/ui/Tab';
import Title from '../../_components/common/Title';
import Text from '@/components/ui/Text';
import BudgetBanner from '../../_components/common/BudgetBanner';
import useDefaultParam from '@/shared/hooks/useDefaultParam';

const data = [
  { amount: '131만', month: '23.12월', height: '80%' },
  { amount: '131만', month: '1월', height: '80%' },
  { amount: '131만', month: '2월', height: '80%' },
  { amount: '131만', month: '3월', height: '80%' },
  { amount: '131만', month: '이번 달', height: '100%', isCurrent: true }
];

const ExpenseComparison = () => {
  useDefaultParam('daily', '월별');

  return (
    <section className='px-20 py-32'>
      <Title title='지출 비교' className='mb-16' />
      <Tab array={['일별', '월별']} type='box' tabKey='daily' />
      <ul className='flex justify-between gap-8 py-40 text-center text-gray-500'>
        {data.map(({ amount, month, height, isCurrent }, index) => {
          return (
            <li key={index}>
              <Text sizes='12' weight='700' className={isCurrent ? 'text-black' : ''}>
                {amount}
              </Text>
              <div className='relative mb-12 mt-8 min-h-[14rem] w-[5.42rem] overflow-hidden rounded-md bg-gray-200'>
                <div
                  className='absolute bottom-0 w-full rounded-md bg-primary'
                  style={{ height }}
                ></div>
              </div>
              <Text className='text-gray-700'>{month}</Text>
            </li>
          );
        })}
      </ul>
      <BudgetBanner text='한 달에 평균 1,000,000원 정도 써요' />
    </section>
  );
};

export default ExpenseComparison;
