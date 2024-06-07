import { requestFetch } from '../fetchOptions';
import type { CalendarHistroyResponse } from '@/shared/types/response/calendarHistroy';

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

export const getCalendarHistroy = (): Promise<CalendarHistroyResponse> => {
  return requestFetch('/history', {}, BASE_URL);
};
