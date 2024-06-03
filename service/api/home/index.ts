import { requestFetch } from '../fetchOptions';
import { DataType } from '@/types/widget-type/widgetType';

export const getWidgetItem = (): Promise<DataType> => {
  return requestFetch('/api/widget');
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
