import { useState } from 'react';
import {
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { ExtendsWidgetType } from '@/shared/types/response/widgetResponse';

const useDrag = (setShowWidget: React.Dispatch<React.SetStateAction<ExtendsWidgetType[]>>) => {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  });
  const sensors = useSensors(pointerSensor, touchSensor);
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    const { id } = active;
    setActiveId(id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;
    if (active.id !== over.id) {
      setShowWidget((items) => {
        const oldIndex = items.findIndex((item) => item.widgetId === active.id);
        const newIndex = items.findIndex((item) => item.widgetId === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return { activeId, sensors, handleDragStart, handleDragEnd };
};
export default useDrag;
