import FlexBox from '@/components/ui/FlexBox';
import Icon from '@/components/Icon';
import { ExpenseItemProps } from '@/types/budgetCalendarType';
import ExpenseItem from './ExpenseItem';

const dummyExpensesList: ExpenseItemProps[] = [
  {
    icon: '/icons/categories/background/categories-2.svg',
    iconDescription: '생활',
    amount: '- 1,000,000원',
    payment: '결제처',
    method: '결제 수단',
    regret: true
  },
  {
    icon: '/icons/categories/background/categories-2.svg',
    iconDescription: '생활',
    amount: '- 1,000,000원',
    payment: '결제처',
    method: '결제 수단'
  }
];

const ExpensListBox = () => {
  return (
    <div className='px-20 py-24 text-16'>
      <FlexBox alignItems='center' justifyContent='between' className='mb-32'>
        <h2 className='text-18 font-700'>소비 내역</h2>
        <FlexBox alignItems='center' className='cursor-pointer text-14 text-gray-500'>
          <Icon src='/icons/system-icon/plus-gray.svg' alt='추가' size='16' />
          <p className='ml-4'>내역추가</p>
        </FlexBox>
      </FlexBox>
      <FlexBox justifyContent='between' className='mb-32 gap-[1.6rem]'>
        <div className='w-1/2 rounded-md bg-gray-50 p-16 pb-10'>
          <p className='mb-4 text-14 text-gray-700'>지출</p>
          <p className='font-700'>- 1,000,000원</p>
        </div>
        <div className='w-1/2 rounded-md bg-gray-50 p-16 pb-10'>
          <p className='mb-4 text-14 text-gray-700'>수입</p>
          <p className='font-700'>+ 1,000,000원</p>
        </div>
      </FlexBox>
      <div>
        <div className='flex items-center gap-[0.8rem]'>
          <span className='text-14 text-gray-500'>10일 화요일</span>
          <p className='text-12 text-warning'>이번 달 예산 초과</p>
        </div>
        <ul>
          {dummyExpensesList.map((data, index) => (
            <ExpenseItem key={index} {...data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpensListBox;
