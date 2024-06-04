'use client';
import React, { useEffect, useState } from 'react';
import { getWidgetItem } from '@/service/api/home';
import { useQuery } from '@tanstack/react-query';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { EditWidgetDataType } from '@/types/widget-type/widgetType';
import { Card } from '@/components/ui/card';
import DragOverWidget from './DragOverWidget';
import IsEditWidgetItem from './IsEditWidgetItem';
import { closestCorners, DndContext, UniqueIdentifier } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import useDrag from '../hooks/useDrag';
import useInsertAndDelete from '../hooks/useInsertAndDelete';
import LoadingGrid from './LoadingGrid';
import { restrictToParentElement } from '@dnd-kit/modifiers';

const DragContainer = () => {
  const [showWidget, setShowWidget] = useState<EditWidgetDataType[0]['showWidget']>([]);
  const [hideWidget, setHideWidget] = useState<EditWidgetDataType[0]['hideWidget']>([]);
  const { activeId, sensors, handleDragStart, handleDragEnd } = useDrag(setShowWidget);
  const { handleDeleteWidgetItem, handleInsertWidgetItem } = useInsertAndDelete(
    setShowWidget,
    setHideWidget,
    showWidget,
    hideWidget
  );
  const { data, isLoading } = useQuery<EditWidgetDataType>({
    queryKey: ['fetchWidget'],
    queryFn: getWidgetItem
  });

  useEffect(() => {
    if (data) {
      setShowWidget(data[0]?.showWidget || []);
      setHideWidget(data[0]?.hideWidget || []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const findItemTitle = (id: UniqueIdentifier | undefined) => {
    const item = showWidget.find((item) => item.id === id);
    if (!item) return '';
    return item.title;
  };

  if (isLoading) {
    return <LoadingGrid />;
  }

  return (
    <>
      <section className='grid grid-cols-2 gap-20 px-20'>
        {/* ShowWidget 렌더링 */}
        <DndContext
          modifiers={[restrictToParentElement]}
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
      </section>
      <div aria-hidden className='my-[2rem] h-[1.1rem] bg-gray-50'></div>
      <section className='bg-white px-[2rem] pb-[16.8rem]'>
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
      </section>
    </>
  );
};

export default DragContainer;
