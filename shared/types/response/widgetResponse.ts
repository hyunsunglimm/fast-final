export type MemberWidgetReponseType = {
  orderedMemberWidgets: WidgetElementType[];
  unorderedMemberWidgets: WidgetElementType[];
};

export type WidgetElementType = {
  widgetId: number;
  code: string;
  description: string;
  sequence: number;
};

export type EidtWidgetBodyType = {
  elements: {
    widgetId: number;
    sequence: number;
  }[];
};
