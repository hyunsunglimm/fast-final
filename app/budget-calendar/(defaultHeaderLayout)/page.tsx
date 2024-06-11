import React from 'react';
import Tab from '@/components/ui/Tab';
import LookAloneContainer from '../_components/look-alone/LookAloneContainer';
import LookTogetherContainer from '../_components/look-together/LookTogetherContainer';
import { currentUserSession } from '@/shared/actions/auth';

type BudgetCalendarPageProps = {
  searchParams: Record<string, string | undefined>;
};

const BudgetCalendarPage = async ({ searchParams }: BudgetCalendarPageProps) => {
  const viewMode = searchParams.viewMode || '혼자봐요';
  const session = await currentUserSession();

  return (
    <main className='min-h-full bg-white pb-[13.2rem]'>
      <div className='sticky top-0 z-20 bg-white'>
        <Tab
          pageParams={viewMode}
          array={['혼자봐요', '함께봐요']}
          type='underline'
          tabKey='viewMode'
        />
      </div>
      {viewMode === '혼자봐요' && <LookAloneContainer />}
      {viewMode === '함께봐요' && (
        <LookTogetherContainer userData={session?.user} viewMode={viewMode} />
      )}
    </main>
  );
};

export default BudgetCalendarPage;
