import { DailyDataItemType } from '@/shared/types/budgetCalendarType';
import { requestFetch } from '../fetchOptions';
import type {
  CalendarHistroyResponse,
  SpendingDetailResponse,
  Element
} from '@/shared/types/response/calendarHistroy';
import { LastMonthInquiryResponse } from '@/shared/types/response/targetBudget';

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

/**
 * @returns 가계부 소비내역 리스트
 */
export const getCalendarHistroy = (page: number): Promise<CalendarHistroyResponse> => {
  return requestFetch(
    `/history?startDate=2024-01-01&endDate=2024-06-30&page=${page}&size=10`,
    {},
    BASE_URL
  );
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
export const patchRegret = (historyId: number, regret: boolean): Promise<Element> => {
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

/**
 * @returns 목표 예산 설정
 */
export const postBudget = (cost: number) => {
  const requestBody = { cost };
  return requestFetch('/budget', { method: 'post', body: JSON.stringify(requestBody) }, BASE_URL);
};

/**
 * @returns 목표 예산 설정 (저번 달 지출 금액 조회)
 */
export const getLastMonthInquiry = (): Promise<LastMonthInquiryResponse> => {
  return requestFetch('/budget/lastused', {}, BASE_URL);
};
