'use client';
import FlexBox from '@/components/ui/FlexBox';
import { IsBackHeader } from '@/components/Header';
import Text from '@/components/ui/Text';
import TopContents from './_components/TopContents';
import React, { MouseEvent, useEffect, useState } from 'react';
import IsEditWidgetItem from './_components/IsEditWidgetItem';
import { getWidgetItem } from '@/actions/serverAction';
import { DataType } from '../(home)/_components/HomeWidgetSection';
import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';

const EditWidgetPage = () => {
  const [showWidget, setShowWidget] = useState<DataType[0]['showWidget']>([]);
  const [hideWidget, setHideWidget] = useState<DataType[0]['hideWidget']>([]);

  const { data, isLoading } = useQuery<DataType>({
    queryKey: ['fetchWidget'],
    queryFn: () => getWidgetItem()
  });

  useEffect(() => {
    if (data) {
      setShowWidget(data[0]?.showWidget || []);
      setHideWidget(data[0]?.hideWidget || []);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  const handleDeleteWidgetItem = (e: MouseEvent<HTMLButtonElement>) => {
    const currentClickItem = e.currentTarget.id;
    setShowWidget((prevShowWidget) =>
      prevShowWidget.filter((item) => item.id !== currentClickItem)
    );
    const deletedItem = showWidget.find((item) => item.id === currentClickItem);
    if (deletedItem) {
      setHideWidget((prevHideWidget) => [...prevHideWidget, deletedItem]);
    }
  };

  const handleInsertWidgetItem = (e: MouseEvent<HTMLButtonElement>) => {
    if (showWidget.length >= 6) return;
    const currentClickItem = e.currentTarget.id;
    const insertItem = hideWidget.find((item) => item.id === currentClickItem);
    if (insertItem) {
      setHideWidget((prevHideWidget) =>
        prevHideWidget.filter((item) => item.id !== currentClickItem)
      );
      setShowWidget((prevShowWidget) => [...prevShowWidget, insertItem]);
    }
  };

  return (
    <>
      <IsBackHeader title='한 눈에 보기 편집' href='/' />
      <TopContents />
      <div className='grid grid-cols-2 gap-x-[2rem] gap-y-[1.9rem] px-[2rem]'>
        {/* ShowWidget 렌더링 */}
        {showWidget.map((item) => {
          return (
            <IsEditWidgetItem
              key={item.id}
              id={item.id}
              title={item.title}
              onClick={handleDeleteWidgetItem}
            ></IsEditWidgetItem>
          );
        })}
        {/* ShowWidget가 6미만인 경우 빈 카드 렌더링 */}
        {showWidget.length < 6 && (
          <Card className='relative flex aspect-square items-center justify-center border border-dashed border-gray-500 p-[1.2rem] shadow-none'>
            <Text className='text-center text-gray-500' sizes='18' weight='500'>
              위젯을 <br />
              추가해보세요!
            </Text>
          </Card>
        )}
      </div>
      <div aria-hidden className='my-[2rem] h-[1.1rem] bg-gray-50'></div>
      <div className='bg-white px-[2rem] pb-[16.8rem]'>
        <div className='mb-[2.4rem]'>
          <Text sizes='20' weight='700'>
            숨긴 항목
          </Text>
        </div>
        {/* HideWidget 렌더링 */}
        <FlexBox flexDirection='col' className='gap-y-[3.2rem] '>
          {hideWidget.map((item) => {
            return (
              <FlexBox key={item.id} justifyContent='between' className='w-full'>
                <Text sizes='18' weight='500' className='text-gray-700'>
                  {item.title}
                </Text>
                <button
                  id={item.id}
                  onClick={handleInsertWidgetItem}
                  aria-label='항목 추가'
                  disabled={showWidget.length >= 6}
                  className='group relative flex aspect-square w-[2.8rem] items-center justify-center rounded-full bg-primary disabled:cursor-not-allowed disabled:bg-gray-200'
                >
                  <span className='absolute h-[0.3rem] w-[1.6rem] rounded-lg bg-white group-disabled:bg-gray-400'></span>
                  <span className='absolute h-[0.3rem] w-[1.6rem] rotate-90 rounded-lg bg-white group-disabled:bg-gray-400'></span>
                </button>
              </FlexBox>
            );
          })}
        </FlexBox>
      </div>
    </>
  );
};
export default EditWidgetPage;
