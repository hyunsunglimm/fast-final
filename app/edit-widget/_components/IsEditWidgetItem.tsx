import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Text from '@/components/ui/Text';
import { MouseEvent } from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Icon from '@/components/Icon';
import { cn } from '@/utils/twMerge';

type IsEditWidgetItemProps = {
  title: string;
  id: UniqueIdentifier;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};
const IsEditWidgetItem = ({ title, id, onClick }: IsEditWidgetItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: id,
    data: {
      type: 'item'
    }
  });

  return (
    <Card
      className={cn(
        'relative aspect-square cursor-default border border-gray-100 p-[1.2rem]',
        isDragging && 'opacity-30'
      )}
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform)
      }}
      id={String(id)}
    >
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

      <CardHeader className='w-full items-end pt-[0.4rem]'>
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
