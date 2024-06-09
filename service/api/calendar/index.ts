import { DailyDataItemType } from '@/shared/types/budgetCalendarType';
import { requestFetch } from '../fetchOptions';
import type {
  CalendarHistroyResponse,
  SpendingDetailResponse,
  HistoryListItemType
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

/**
 * @param historyId 소비내역 아이디
 * @param regret 후회 여부
 * @returns
 */
export const patchRegret = (historyId: number, regret: boolean): Promise<HistoryListItemType> => {
  const param = regret ? 'true' : 'false';
  return requestFetch(
    `/history/${historyId}/regret?regret=${param}`,
    { method: 'PATCH' },
    BASE_URL
  );
};

/**
 * @returns 캘린더 조회
 */
export const getCalendar = (
  year: number,
  month: number,
  memberId?: number
): Promise<DailyDataItemType[]> => {
  const url = memberId
    ? `/history/calendar?year=${year}&month=${month}&memberId=${memberId}`
    : `/history/calendar?year=${year}&month=${month}`;

  return requestFetch(url, {}, BASE_URL);
};
