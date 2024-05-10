import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardHeader } from '@/components/ui/card';
import Text from '@/components/ui/Text';

type DraggableCardItemProps = {
  id: string | number;
  text: string;
};

const DraggableCardItem = ({ id, text }: DraggableCardItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  // TODO 편집플로우에 맞춰서 수정, 드래그 가능 영역 추가
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: 'none'
  };
  return (
    <Card
      className='aspect-square w-full'
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <CardHeader>
        <Text>{text}</Text>
      </CardHeader>
    </Card>
  );
};

export default DraggableCardItem;
