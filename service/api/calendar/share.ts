import { requestFetch } from '../fetchOptions';
import { FriendData } from '@/shared/types/budgetCalendarType';
import { RegretSpendingResponse } from '@/shared/types/response/regretSpending';

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

/**
 * @returns 공유한 멤버
 */
export const getFriend = (): Promise<FriendData> => {
  return requestFetch('/friend', {}, BASE_URL);
};

/**
 * @returns 쓰고 후회한 소비 돈 조회
 */
export const getConsumptionRegret = (
  year: number,
  month: number,
  memberId?: number
): Promise<RegretSpendingResponse> => {
  const url = memberId
    ? `/consumption/regret?year=${year}&month=${month}&memberId=${memberId}`
    : `/consumption/regret?year=${year}&month=${month}`;
  return requestFetch(url, {}, BASE_URL);
};
