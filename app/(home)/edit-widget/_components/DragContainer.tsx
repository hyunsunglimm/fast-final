'use client';
import React, { useEffect, useState } from 'react';
import { getWidgetItem } from '@/service/api/home';
import { useQuery } from '@tanstack/react-query';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { MemberWidgetReponseType, ExtendsWidgetType } from '@/shared/types/response/widgetResponse';
import { Card } from '@/components/ui/card';
import DragOverWidget from './DragOverWidget';
import IsEditWidgetItem from './IsEditWidgetItem';
import { closestCorners, DndContext, UniqueIdentifier } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import useDrag from '../hooks/useDrag';
import useInsertAndDelete from '../hooks/useInsertAndDelete';
import LoadingGrid from './LoadingGrid';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import { WidgetElementsArr, widgetReducer } from '../utils/widgetReduce';
import FixedBottom from './FixedBottom';

const DragContainer = () => {
  const [showWidget, setShowWidget] = useState<ExtendsWidgetType[]>([]);
  const [hideWidget, setHideWidget] = useState<ExtendsWidgetType[]>([]);
  const { activeId, sensors, handleDragStart, handleDragEnd } = useDrag(setShowWidget);
  const { handleDeleteWidgetItem, handleInsertWidgetItem } = useInsertAndDelete(
    setShowWidget,
    setHideWidget,
    showWidget,
    hideWidget
  );

  const { data, isLoading } = useQuery<MemberWidgetReponseType>({
    queryKey: ['fetchWidget'],
    queryFn: getWidgetItem
  });

  useEffect(() => {
    if (data) {
      const { orderedMemberWidgets, unorderedMemberWidgets } = data;
      setShowWidget(widgetReducer(orderedMemberWidgets, WidgetElementsArr));
      setHideWidget(widgetReducer(unorderedMemberWidgets, WidgetElementsArr));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const findItemTitle = (id: UniqueIdentifier) => {
    const item = showWidget.find((item) => item.widgetId === id);
    if (!item) return '';
    return item.description;
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
          <SortableContext items={showWidget.map((item) => item.widgetId)}>
            {showWidget.map((item) => {
              return (
                <IsEditWidgetItem
                  key={item.widgetId}
                  id={item.widgetId}
                  title={item.description}
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
                  {item.description}
                </Text>
                <button
                  id={String(item.widgetId)}
                  onClick={handleInsertWidgetItem}
                  aria-label={`${item.description} 항목 추가`}
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
      <FixedBottom />
    </>
  );
};

export default DragContainer;
