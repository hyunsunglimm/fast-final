import { UniqueIdentifier } from '@dnd-kit/core';
export type WidgetReponseType = {
  elements: Element[];
};

export type Element = {
  id: UniqueIdentifier;
  code: string;
  description: string;
  sequence: number;
};
