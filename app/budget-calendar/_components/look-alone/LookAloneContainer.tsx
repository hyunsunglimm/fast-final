import dynamic from 'next/dynamic';
import Tab from '@/components/ui/Tab';
import Line from '../common/Line';
import BudgetBanner from '../common/BudgetBanner';
import ExpensCalendarBox from './ExpensCalendarBox';
const ExpensListBox = dynamic(() => import('./ExpensListBox'));

const LookAloneContainer = () => {
  return (
    <>
      <div className='px-20 pb-24 pt-16'>
        <Tab array={['캘린더 보기', '내역 보기']} type='box' tabKey='displayMode' />
      </div>
      <div className='px-20 text-12'>
        <BudgetBanner icon={true} text='목표 예산 중 50%를 썼어요' showArrow={true} />
        <ExpensCalendarBox />
      </div>
      <Line />
      <ExpensListBox />
    </>
  );
};

export default LookAloneContainer;
