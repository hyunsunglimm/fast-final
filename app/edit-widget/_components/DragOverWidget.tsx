import React from 'react';
import { DragOverlay } from '@dnd-kit/core';
import IsEditWidgetItem from './IsEditWidgetItem';
import { UniqueIdentifier } from '@dnd-kit/core/dist/types';

type DragOverWidgetProps = {
  activeId: UniqueIdentifier;
  title: string;
};

const DragOverWidget = ({ activeId, title }: DragOverWidgetProps) => {
  return (
    <DragOverlay adjustScale={false}>
      {activeId && <IsEditWidgetItem id={activeId} title={title} dragOverlay />}
    </DragOverlay>
  );
};

export default DragOverWidget;
