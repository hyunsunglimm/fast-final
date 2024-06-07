'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Tab from '@/components/ui/Tab';
import Line from '../common/Line';
import BudgetBanner from '../common/BudgetBanner';
import ExpensCalendarBox from './ExpensCalendarBox';
import ExpensListBox from './ExpensListBox';
const TargetBudgetBottomSheet = dynamic(() => import('./TargetBudgetBottomSheet'));

const LookAloneContainer = () => {
  // 상태 관리
  const [budgetSet, setBudgetSet] = useState(false); // 예산 목표가 설정되었는지 여부
  const [budgetUsed, setBudgetUsed] = useState(0.5); // 예산 사용 비율 (0.5는 50%를 의미)
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className='px-20 pb-24 pt-16'>
        <Tab array={['캘린더 보기', '내역 보기']} type='box' tabKey='displayMode' />
      </div>
      <div className='px-20 text-12'>
        {budgetSet ? (
          <BudgetBanner
            icon={true}
            text={`목표 예산 중 ${budgetUsed * 100}%를 썼어요`}
            showArrow={true}
          />
        ) : (
          <BudgetBanner
            icon={true}
            text='목표 예산을 설정할까요?'
            showArrow={true}
            onClick={() => setShowPopup(true)}
          />
        )}
        <ExpensCalendarBox />
      </div>
      <Line />
      <ExpensListBox />

      {/* 목표 설정 바텀시트 */}
      <TargetBudgetBottomSheet
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        setBudgetSet={setBudgetSet}
      />

      {/* 목표 관리 바텀시트 */}
    </>
  );
};

export default LookAloneContainer;
