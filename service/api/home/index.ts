import { requestFetch } from '../fetchOptions';
import { DataType } from '@/types/widget-type/widgetType';

export const getWidgetItem = (): Promise<DataType> => {
  return requestFetch('/api/widget');
};
export const getMyWalletData = (): Promise<any[]> => {
  return requestFetch('/api/wallet');
};
