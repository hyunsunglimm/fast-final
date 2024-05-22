'use client';
import FlexBox from '@/components/ui/FlexBox';
import { IsBackHeader } from '@/components/header';
import Text from '@/components/ui/Text';
import TopContents from './_components/TopContents';
import React, { useEffect, useState } from 'react';
import IsEditWidgetItem from './_components/IsEditWidgetItem';
import { getWidgetItem } from '@/actions/serverAction';
import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import DragOverWidget from './_components/DragOverWidget';
import useDrag from './hooks/useDrag';
import useInsertAndDelete from './hooks/useInsertAndDelete';
import { DataType } from '@/types/widget-type/widgetType';
import { closestCorners, DndContext, UniqueIdentifier } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

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

  const { activeId, sensors, handleDragStart, handleDragEnd, isDragging } = useDrag(setShowWidget);
  const { handleDeleteWidgetItem, handleInsertWidgetItem } = useInsertAndDelete(
    setShowWidget,
    setHideWidget,
    showWidget,
    hideWidget
  );
  // console.log(isDragging);
  const findItemTitle = (id: UniqueIdentifier | undefined) => {
    const item = showWidget.find((item) => item.id === id);
    if (!item) return '';
    return item.title;
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <IsBackHeader href='/' title='한 눈에 보기 편집' />
      <TopContents />
      <div className='grid grid-cols-2 gap-20 px-20'>
        {/* ShowWidget 렌더링 */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={showWidget}>
            {showWidget.map((item) => {
              return (
                <IsEditWidgetItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  onClick={handleDeleteWidgetItem}
                  isDragging={isDragging}
                />
              );
            })}
          </SortableContext>
          {activeId && <DragOverWidget activeId={activeId} title={findItemTitle(activeId)} />}
        </DndContext>

        {/* ShowWidget가 6미만인 경우 빈 카드 렌더링 */}
        {showWidget.length < 6 && (
          <Card className='relative flex aspect-square items-center justify-center border border-dashed border-gray-500 p-12 shadow-none'>
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
        <FlexBox flexDirection='col' className='gap-y-[3.2rem]'>
          {hideWidget.map((item) => {
            return (
              <FlexBox key={item.id} justifyContent='between' className='w-full'>
                <Text sizes='18' weight='500' className='text-gray-700'>
                  {item.title}
                </Text>
                <button
                  id={String(item.id)}
                  onClick={handleInsertWidgetItem}
                  aria-label={`${item.title} 항목 추가`}
                  disabled={showWidget.length >= 6}
                  className='group relative flex aspect-square w-[2.8rem] items-center justify-center rounded-full bg-primary disabled:cursor-not-allowed disabled:bg-gray-200'
                >
                  <span
                    aria-hidden
                    className='absolute h-[0.3rem] w-[1.6rem] rounded-lg bg-white group-disabled:bg-gray-400'
                  ></span>
                  <span
                    aria-hidden
                    className='absolute h-[0.3rem] w-[1.6rem] rotate-90 rounded-lg bg-white group-disabled:bg-gray-400'
                  ></span>
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
