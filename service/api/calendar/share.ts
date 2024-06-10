import { requestFetch } from '../fetchOptions';
import { FriendData } from '@/shared/types/budgetCalendarType';

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

/**
 * @returns 공유한 멤버
 */
export const getFriend = (): Promise<FriendData> => {
  return requestFetch('/friend', {}, BASE_URL);
};
