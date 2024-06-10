import { BudgetInquiryResponse } from '@/shared/types/response/targetBudget';
import { requestFetch } from '../fetchOptions';

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

/**
 *
 * @returns 목표 예산 사용률 조회 (함께봐요 배너에 퍼센트)
 */
export const getBudgetInquiry = (
  goalYear: number,
  goalMonth: number,
  memberId?: number
): Promise<BudgetInquiryResponse> => {
  const url = memberId
    ? `/budget?goalYear=${goalYear}&goalMonth=${goalMonth}&memberId=${memberId}`
    : `/budget?goalYear=${goalYear}&goalMonth=${goalMonth}`;
  return requestFetch(url, {}, BASE_URL);
};
