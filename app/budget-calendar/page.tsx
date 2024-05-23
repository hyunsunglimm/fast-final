'use client';

import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { DefaultHeader } from '@/components/header';
import Tab from '@/components/ui/Tab';
import FlexBox from '@/components/ui/FlexBox';

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
    <div className='min-h-full bg-white pb-[13.2rem]'>
      <DefaultHeader title='가계부' />
      <Tab
        array={['혼자봐요', '함께봐요']}
        type='underline'
        tabKey='viewMode'
        onTabChange={handleViewModeChange}
      />
      {viewMode === '혼자봐요' && (
        <>
          <div className='px-20 pb-24 pt-16'>
            <Tab array={['캘린더 보기', '내역 보기']} type='box' tabKey='displayMode' />
          </div>
          {/* 콘텐츠 */}
          <div className='px-20 text-12'>
            <FlexBox
              alignItems='center'
              justifyContent='between'
              className='cursor-pointer rounded-md bg-banner p-16 text-14'
            >
              <FlexBox alignItems='center'>
                <div className='relative mr-12 h-[2.4rem] w-[2.4rem]'>
                  <Image src='/icons/budget-calendar/small-pig.svg' alt='pig' fill />
                </div>
                <p>목표 예산 중 50%를 썼어요</p>
              </FlexBox>
              <div className='relative h-[1.6rem] w-[1.6rem]'>
                <Image
                  src='/icons/system-icon/arrow/arrow-right-gray.svg'
                  alt='오른쪽화살표'
                  fill
                />
              </div>
            </FlexBox>
            <div className='mt-24 h-[30rem]'>
              <FlexBox alignItems='center'>
                <h2 className=' mr-8 text-18 font-600'>소비 캘린더</h2>
                <div className='relative h-[1.6rem] w-[1.6rem]'>
                  <Image src='/icons/system-icon/info.svg' alt='정보' fill />
                </div>
              </FlexBox>
            </div>
          </div>
          {/* 라인 */}
          <div className='h-[1.6rem] bg-gray-50'></div>
          {/* 소비내역 콘텐츠 */}
          <div className='px-20 py-24 text-16'>
            <FlexBox alignItems='center' justifyContent='between' className='mb-32'>
              <h2 className='text-18 font-700'>소비 내역</h2>
              <div className='flex cursor-pointer items-center text-14 text-gray-500'>
                <div className='relative h-[1.6rem] w-[1.6rem]'>
                  <Image src='/icons/system-icon/plus-gray.svg' alt='추가' fill />
                </div>
                <p className='ml-4'>내역추가</p>
              </div>
            </FlexBox>
            <FlexBox justifyContent='between' className='mb-32 gap-[1.6rem]'>
              <div className='w-1/2 rounded-md bg-gray-50 p-16 pb-10'>
                <p className='mb-4 text-14 text-gray-700'>지출</p>
                <p className='font-700'>- 1,000,000원</p>
              </div>
              <div className='w-1/2 rounded-md bg-gray-50 p-16 pb-10'>
                <p className='mb-4 text-14 text-gray-700'>지출</p>
                <p className='font-700'>- 1,000,000원</p>
              </div>
            </FlexBox>
            <div>
              <div className='flex items-center gap-[0.8rem]'>
                <span className='text-14 text-gray-500'>10일 화요일</span>
                <p className='text-12 text-warning'>이번 달 예산 초과</p>
              </div>
              <ul>
                <li className='mt-24 flex items-center justify-between gap-[1.6rem]'>
                  <div className='relative h-[4rem] w-[4rem] shrink-0'>
                    <Image src='/icons/categories/background/categories-2.svg' alt='생활' fill />
                  </div>
                  <div className='w-full'>
                    <p className='mb-4 font-700'>- 1,000,000원</p>
                    <div className='flex gap-[0.2rem] text-12 text-gray-500'>
                      <p>결제처</p>
                      <p>|</p>
                      <p>결제 수단</p>
                    </div>
                  </div>
                  <div className='shrink-0'>
                    <div className='relative m-auto mb-6 h-[2.4rem] w-[2.4rem]'>
                      <Image
                        src='/icons/categories/background/categories-regret.svg'
                        alt='후회 소비'
                        fill
                      />
                    </div>
                    <p className='text-12 text-[#7191F3]'>후회 소비</p>
                  </div>
                </li>
                <li className='mt-24 flex items-center justify-between gap-[1.6rem]'>
                  <div className='relative h-[4rem] w-[4rem] shrink-0'>
                    <Image src='/icons/categories/background/categories-2.svg' alt='생활' fill />
                  </div>
                  <div className='w-full'>
                    <p className='mb-4 font-700'>- 1,000,000원</p>
                    <div className='flex gap-[0.2rem] text-12 text-gray-500'>
                      <p>결제처</p>
                      <p>|</p>
                      <p>결제 수단</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BudgetCalendarPage;
