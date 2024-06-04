import { MouseEvent } from 'react';
import type {
  SetShowWidgetType,
  SetHideWidgetType,
  EditWidgetDataType
} from '@/service/types/widget-type/widgetType';

const useInsertAndDelete = (
  setShowWidget: SetShowWidgetType,
  setHideWidget: SetHideWidgetType,
  showWidget: EditWidgetDataType[0]['showWidget'],
  hideWidget: EditWidgetDataType[0]['hideWidget']
) => {
  const handleDeleteWidgetItem = (e: MouseEvent<HTMLButtonElement>) => {
    const currentClickItem = e.currentTarget.id;
    setShowWidget((prevShowWidget) =>
      prevShowWidget.filter((item) => item.id !== currentClickItem)
    );
    const deletedItem = showWidget.find((item) => item.id === currentClickItem);
    if (deletedItem) {
      setHideWidget((prevHideWidget) => [...prevHideWidget, deletedItem]);
    }
  };

  const handleInsertWidgetItem = (e: MouseEvent<HTMLButtonElement>) => {
    if (showWidget.length >= 6) return;
    const currentClickItem = e.currentTarget.id;
    const insertItem = hideWidget.find((item) => item.id === currentClickItem);
    if (insertItem) {
      setHideWidget((prevHideWidget) =>
        prevHideWidget.filter((item) => item.id !== currentClickItem)
      );
      setShowWidget((prevShowWidget) => [...prevShowWidget, insertItem]);
    }
  };

  return { handleDeleteWidgetItem, handleInsertWidgetItem };
};

export default useInsertAndDelete;
