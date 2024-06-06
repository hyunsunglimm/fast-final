import { MemberWidgetReponseType } from '@/shared/types/response/widgetResponse';
import { requestFetch } from '../fetchOptions';
const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

type WalletDataType = {
  bank: string;
  bankBookName: string;
  amount: number;
  lastDeposit: number;
  lastSpending: number;
  iconSrc: string;
}[];
export const getMyWalletData = (): Promise<WalletDataType> => {
  return requestFetch('/api/wallet');
};

export const getWidgetItem = (): Promise<MemberWidgetReponseType> => {
  return requestFetch('/member/widget', {}, BASE_URL);
};
