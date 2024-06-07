import { requestFetch } from '../fetchOptions';
import type {
  CalendarHistroyResponse,
  SpendingDetailResponse
} from '@/shared/types/response/calendarHistroy';

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

/**
 * @returns 가계부 소비내역 리스트
 */
export const getCalendarHistroy = (): Promise<CalendarHistroyResponse> => {
  return requestFetch('/history', {}, BASE_URL);
};

/**
 * @param historyId 소비내역 아이디
 * @returns 소비내역 상세
 */
export const getSpendingDetail = (historyId: string): Promise<SpendingDetailResponse> => {
  return requestFetch(`/history/${historyId}`, {}, BASE_URL);
};
