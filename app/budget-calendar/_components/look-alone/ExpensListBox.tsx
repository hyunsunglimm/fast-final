import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import { ExpenseItemProps, ExpenseSummaryProps } from '@/service/types/budgetCalendarType';
import { formatDate, groupByDate } from '@/shared/utils/dateUtils';
import Title from '../common/Title';
import ExpenseSummary from './ExpensSummary';
import ExpenseItem from './ExpenseItem';

const summaryData: ExpenseSummaryProps[] = [
  { label: '지출', amount: '- 1,000,000' },
  { label: '수입', amount: '+ 1,000,000' }
];

const dummyExpensesList: ExpenseItemProps[] = [
  {
    icon: '/icons/categories/background/categories-2.svg',
    iconDescription: '생활',
    used_at: '2024-05-10',
    amount: '- 1,000,000원',
    payment: '결제처',
    method: '결제 수단',
    regret: true
  },
  {
    icon: '/icons/categories/background/categories-2.svg',
    iconDescription: '생활',
    used_at: '2024-05-10',
    amount: '- 1,000,000원',
    payment: '결제처',
    method: '결제 수단'
  },
  {
    icon: '/icons/categories/background/categories-2.svg',
    iconDescription: '생활',
    used_at: '2024-05-11',
    amount: '- 1,000,000원',
    payment: '결제처',
    method: '결제 수단'
  }
];

const ExpensListBox = () => {
  const groupedExpenses = groupByDate(dummyExpensesList);

  return (
    <section className='px-20 py-24 text-16'>
      <Title title='소비 내역' className='mb-32'>
        <FlexBox alignItems='center' className='cursor-pointer text-14 text-gray-500'>
          <Icon src='/icons/system-icon/plus-gray.svg' alt='추가' size='16' />
          <p className='ml-4'>내역추가</p>
        </FlexBox>
      </Title>
      <FlexBox justifyContent='between' className='gap-[1.6rem]'>
        {summaryData.map((data, index) => (
          <ExpenseSummary key={index} label={data.label} amount={data.amount} />
        ))}
      </FlexBox>
      {Object.entries(groupedExpenses).map(([date, expenses]) => {
        return (
          <div key={date} className='mt-32'>
            <div className='flex items-center gap-[0.8rem]'>
              <span className='text-14 text-gray-500'>{formatDate(date)}</span>
              <p className='text-12 text-warning'>이번 달 예산 초과</p>
            </div>
            <ul>
              {expenses.map((data, index) => (
                <ExpenseItem key={index} {...data} />
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default ExpensListBox;
