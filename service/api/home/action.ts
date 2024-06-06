'use server';
import { EidtWidgetBodyType } from '@/shared/types/response/widgetResponse';
import { requestFetch } from '../fetchOptions';
import { revalidatePath } from 'next/cache';
const BASE_URL = process.env.NEXT_PUBLIC_DEV_URL || '';

export const putEidtWidgetItem = async (body: EidtWidgetBodyType) => {
  revalidatePath('/');
  return requestFetch('/member/widget', { method: 'put', body: JSON.stringify(body) }, BASE_URL);
};
