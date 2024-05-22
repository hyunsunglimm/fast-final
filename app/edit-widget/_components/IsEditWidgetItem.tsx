import { MouseEvent, useEffect } from 'react';
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
  isDragging?: boolean;
};
const IsEditWidgetItem = ({ title, id, onClick, isDragging }: IsEditWidgetItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    active,
    isDragging: useDragging
  } = useSortable({
    id: id,
    data: {
      type: 'item'
    }
  });
  // useEffect(() => {
  //   console.log(active);
  // }, [isDragging]);
  return (
    <Card
      className={cn(
        'no-user-select relative aspect-square cursor-default border border-gray-100 p-[1.2rem] ',
        useDragging && 'opacity-30'
      )}
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
        scale: isDragging && active?.id === id ? 1.16 : 1
      }}
      id={String(id)}
    >
      <CardHeader className='w-full items-end pt-[0.4rem]'>
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
          />
        </button>
        <button {...listeners} className='cursor-grab touch-none active:cursor-grabbing'>
          <Icon
            src='/icons/asset-page/three-bar.svg'
            size='16'
            alt='드래그 아이콘'
            className='pointer-events-none'
          />
        </button>
      </CardHeader>
      <CardContent alignItems='center' justifyContent='center' className='pt-[4.6rem]'>
        <Text sizes='16' className='text-gray-500'>
          {title}
        </Text>
      </CardContent>
    </Card>
  );
};

export default IsEditWidgetItem;
