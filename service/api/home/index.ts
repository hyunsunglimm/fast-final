import { requestFetch } from '../fetchOptions';
import { DataType } from '@/types/widget-type/widgetType';

export const getWidgetItem = (): Promise<DataType> => {
  return requestFetch('/api/widget');
};
export const getMyWalletData = () => {
  return requestFetch('/api/wallet');
};
