import { requestFetch } from '../fetchOptions';
import { WidgetReponseType } from '@/shared/types/response/widgetResponse';

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

export const getWidgetItem = (): Promise<WidgetReponseType> => {
  return requestFetch('/member/widget', {}, BASE_URL);
};

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
