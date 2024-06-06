import {
  WidgetElementType,
  WidgetDefaultType,
  ExtendsWidgetType
} from '@/shared/types/response/widgetResponse';

export const WidgetElementsArr: WidgetDefaultType[] = [
  {
    widgetId: 1,
    code: 'REMAINING_BUDGET'
  },
  {
    widgetId: 2,
    code: 'UPCOMING_EXPENSES'
  },
  {
    widgetId: 3,
    code: 'LAST_MONTH_EXPENSES'
  },
  {
    widgetId: 4,
    code: 'CURRENT_MONTH_EXPENSES'
  },
  {
    widgetId: 5,
    code: 'CURRENT_MONTH_CARD_USAGE'
  },
  {
    widgetId: 6,
    code: 'MY_CHALLENGE'
  },
  {
    widgetId: 7,
    code: 'CREDIT_SCORE'
  },
  {
    widgetId: 8,
    code: 'DAILY_EXPENSES'
  }
];

export const widgetReducer = (
  reponseArr: WidgetElementType[],
  WidgetElementArr: WidgetDefaultType[]
) => {
  const reducedWidgets = reponseArr.reduce<ExtendsWidgetType[]>((acc, widget) => {
    const matchingElement = WidgetElementArr.find(
      (widgetArrItem) => widgetArrItem.code === widget.code
    );
    if (matchingElement) {
      acc.push({ ...widget, widgetId: matchingElement.widgetId });
    }
    return acc;
  }, []);

  return reducedWidgets;
};
