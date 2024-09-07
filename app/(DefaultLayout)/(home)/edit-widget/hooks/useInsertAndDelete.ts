import { MouseEvent } from 'react';
import { WidgetElementType } from '@/shared/types/response/widgetResponse';

const useInsertAndDelete = (
  setShowWidget: React.Dispatch<React.SetStateAction<WidgetElementType[]>>,
  setHideWidget: React.Dispatch<React.SetStateAction<WidgetElementType[]>>,
  showWidget: WidgetElementType[],
  hideWidget: WidgetElementType[]
) => {
  const handleDeleteWidgetItem = (e: MouseEvent<HTMLButtonElement>) => {
    const currentClickItem = Number(e.currentTarget.id);

    setShowWidget((prevShowWidget) =>
      prevShowWidget.filter((item) => item.widgetId !== currentClickItem)
    );

    const deletedItem = showWidget.find((item) => item.widgetId === currentClickItem);
    if (deletedItem) {
      setHideWidget((prevHideWidget) => [...prevHideWidget, deletedItem]);
    }
  };

  const handleInsertWidgetItem = (e: MouseEvent<HTMLButtonElement>) => {
    if (showWidget.length >= 6) return;
    const currentClickItem = Number(e.currentTarget.id);

    const insertItem = hideWidget.find((item) => item.widgetId === currentClickItem);
    if (insertItem) {
      setHideWidget((prevHideWidget) =>
        prevHideWidget.filter((item) => item.widgetId !== currentClickItem)
      );
      setShowWidget((prevShowWidget) => [...prevShowWidget, insertItem]);
    }
  };

  return { handleDeleteWidgetItem, handleInsertWidgetItem };
};

export default useInsertAndDelete;
