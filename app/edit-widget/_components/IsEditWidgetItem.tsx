import { MouseEvent } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Icon from '@/components/Icon';
import { cn } from '@/utils/twMerge';
import '@/app/globals.css';
type IsEditWidgetItemProps = {
  title: string;
  id: UniqueIdentifier;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  dragOverlay?: boolean;
};
const IsEditWidgetItem = ({ title, id, onClick, dragOverlay }: IsEditWidgetItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: useDragging
  } = useSortable({
    id: id,
    data: {
      type: 'item'
    }
  });

  const classa = dragOverlay ? 'animate-pop ' : useDragging && 'opacity-50 bg-gray-200';
  return (
    <Card
      className={cn(
        'no-user-select relative flex aspect-square cursor-default flex-col items-center justify-between border border-gray-100 ',
        classa
      )}
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform)
      }}
      id={String(id)}
    >
      <CardHeader className='relative h-[2.6rem] w-full items-end'>
        <button
          id={String(id)}
          onClick={onClick}
          aria-label={`${title} 위젯 숨기기`}
          className='absolute -left-[1rem] -top-[1rem] cursor-pointer'
        >
          <Icon
            src='/icons/asset-page/widget-minus.svg'
            alt='위젯 삭제 아이콘'
            size='28'
            className='pointer-events-none'
            placeholder='empty'
          />
        </button>

        <button
          {...listeners}
          className='absolute cursor-grab touch-none p-10 pr-20 pt-12 active:cursor-grabbing'
        >
          <Icon
            src='/icons/asset-page/three-bar.svg'
            size='16'
            alt='드래그 아이콘'
            className='pointer-events-none rounded-none'
            placeholder='empty'
          />
        </button>
      </CardHeader>
      <CardContent alignItems='center' justifyContent='center' className='flex-1'>
        <Text sizes='16' className='pb-10 text-gray-500'>
          {title}
        </Text>
      </CardContent>
    </Card>
  );
};

export default IsEditWidgetItem;
