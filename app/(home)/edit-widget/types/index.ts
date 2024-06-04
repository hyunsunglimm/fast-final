import { UniqueIdentifier } from '@dnd-kit/core/dist/types';

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
