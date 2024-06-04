import { UniqueIdentifier } from '@dnd-kit/core/dist/types';
export type EditWidgetDataType = {
  showWidget: {
    id: UniqueIdentifier;
    title: string;
  }[];
  hideWidget: {
    id: UniqueIdentifier;
    title: string;
  }[];
}[];
export type SetHideWidgetType = React.Dispatch<
  React.SetStateAction<
    {
      id: UniqueIdentifier;
      title: string;
    }[]
  >
>;
export type SetShowWidgetType = React.Dispatch<
  React.SetStateAction<
    {
      id: UniqueIdentifier;
      title: string;
    }[]
  >
>;
