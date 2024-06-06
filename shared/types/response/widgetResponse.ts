import { UniqueIdentifier } from '@dnd-kit/core';
export type MemberWidgetReponseType = {
  orderedMemberWidgets: WidgetElementType[];
  unorderedMemberWidgets: WidgetElementType[];
};

export type WidgetElementType = {
  id: number;
  code: string;
  description: string;
  sequence: number;
};

export type WidgetDefaultType = {
  widgetId: UniqueIdentifier;
  code: string;
};

export type ExtendsWidgetType = WidgetElementType & Pick<WidgetDefaultType, 'widgetId'>;

export type EidtWidgetBodyType = {
  elements: {
    widgetId: number;
    sequence: number;
  }[];
};
