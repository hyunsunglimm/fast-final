'use client';

import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Tab from '@/components/ui/Tab';
import LookAloneContainer from './_components/look-alone/LookAloneContainer';
import LookTogetherContainer from './_components/look-together/LookTogetherContainer';
import { DefaultHeader } from '@/components/header';

const BudgetCalendarPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const viewMode = searchParams.get('viewMode') || '혼자봐요';
  // const displayMode =
  //   searchParams.get('displayMode') || (viewMode === '혼자봐요' ? '캘린더 보기' : '');

  // viewMode와 displayMode가 설정되지 않았을 경우 (기본값 설정: 혼자봐요, 캘린더 보기)
  useEffect(() => {
    if (
      !searchParams.get('viewMode') ||
      (viewMode === '혼자봐요' && !searchParams.get('displayMode'))
    ) {
      const newParams = new URLSearchParams(searchParams.toString());
      if (!searchParams.get('viewMode')) {
        newParams.set('viewMode', '혼자봐요');
      }
      if (viewMode === '혼자봐요' && !searchParams.get('displayMode')) {
        newParams.set('displayMode', '캘린더 보기');
      }
      router.replace(`/budget-calendar?${newParams.toString()}`);
    }
  }, [searchParams, router, viewMode]);

  // 함께봐요에서 displayMode 삭제
  const handleViewModeChange = (newViewMode: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('viewMode', newViewMode);

    if (newViewMode === '혼자봐요') {
      if (!newParams.get('displayMode')) {
        newParams.set('displayMode', '캘린더 보기');
      }
    } else {
      newParams.delete('displayMode');
    }

    router.replace(`/budget-calendar?${newParams.toString()}`);
  };

  return (
    <>
      <DefaultHeader title='가계부' defaultColor='#fff' isFixed={false} />
      <main className='min-h-full bg-white pb-[13.2rem]'>
        <div className='sticky top-0 z-20 h-[4.4rem] bg-white'>
          <Tab
            array={['혼자봐요', '함께봐요']}
            type='underline'
            tabKey='viewMode'
            onTabChange={handleViewModeChange}
          />
        </div>
        {viewMode === '혼자봐요' && <LookAloneContainer />}
        {viewMode === '함께봐요' && <LookTogetherContainer viewMode={viewMode} />}
      </main>
    </>
  );
};

export default BudgetCalendarPage;
