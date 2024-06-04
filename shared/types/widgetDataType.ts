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
