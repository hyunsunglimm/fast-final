'use client';
import React, { useState, ChangeEvent } from 'react';
import Text from '@/components/ui/Text';
import { Card, CardContent } from '@/components/ui/card';
import DraggableCardItem from './DraggableCardItem';
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragStartEvent,
  PointerSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';

const generateItem = (id: UniqueIdentifier, text: string) => ({ id, text });
const containers = Array.from({ length: 10 }, (_, i) =>
  generateItem(i + 1, String.fromCharCode(65 + i))
);
// TODO 편집플로우에 맞춰서 수정
const DraggableCardContainer = () => {
  const [container, setContainers] = useState(containers);
  const [editMode, setEditMode] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      setContainers((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  return (
    <>
      <CardContent justifyContent='between'>
        <Text variant='h4' weight='700' sizes='20'>
          한 눈에 보기
        </Text>
        <button onClick={() => setEditMode((prev) => !prev)}>
          {editMode ? '편집 완료' : '편집 하기'}
        </button>
      </CardContent>
      <Card className='h-40'>AI 맞춤 추천</Card>
      {editMode ? (
        <div className='grid grid-cols-2 gap-4'>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={container}>
              {container.map((item) => (
                <DraggableCardItem key={item.id} text={item.text} id={item.id} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      ) : (
        <div className='grid grid-cols-2 gap-4'>
          {container.map((item) => (
            <DraggableCardItem key={item.id} text={item.text} id={item.id} />
          ))}
        </div>
      )}
    </>
  );
};
export default DraggableCardContainer;
