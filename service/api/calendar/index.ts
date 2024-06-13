import { DailyDataItemType } from '@/shared/types/budgetCalendarType';
import { requestFetch } from '../fetchOptions';
import type {
  CalendarHistroyResponse,
  SpendingDetailResponse,
  Element
} from '@/shared/types/response/calendarHistroy';
import { BudgetManagement, LastMonthInquiryResponse } from '@/shared/types/response/targetBudget';
import { returnDate } from '@/shared/utils/dateUtils';

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

/**
 * @returns 가계부 소비내역 리스트
 */
export const getCalendarHistroy = (page: number): Promise<CalendarHistroyResponse> => {
  const { year, month, day } = returnDate();

  const curentMonth = month < 10 ? `0${month}` : month;
  const currentDay = day < 10 ? '0{day}' : day;

  return requestFetch(
    `/history?startDate=2024-01-01&endDate=${year}-${curentMonth}-${currentDay}&page=${page}&size=10`,
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

/**
 * @returns 목표 예산 관리
 */
export const getBudgetManagement = (): Promise<BudgetManagement> => {
  return requestFetch('/budget/management', {}, BASE_URL);
};

/**
 * @returns 목표 예산 수정
 */
export const patchBudget = (cost: number) => {
  const requestBody = { cost };
  return requestFetch('/budget', { method: 'PATCH', body: JSON.stringify(requestBody) }, BASE_URL);
};
