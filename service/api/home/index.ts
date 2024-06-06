import { requestFetch } from '../fetchOptions';
import {
  MemberWidgetReponseType,
  EidtWidgetBodyType
} from '@/shared/types/response/widgetResponse';

const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

export const getWidgetItem = (): Promise<MemberWidgetReponseType> => {
  return requestFetch('/member/widget', {}, BASE_URL);
};

export const putEidtWidgetItem = (body: EidtWidgetBodyType) => {
  return requestFetch('/member/widget', { method: 'put', body: JSON.stringify(body) }, BASE_URL);
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
