import { ReadonlyURLSearchParams } from 'next/navigation';

export const getLinkHref = (
  step: number,
  stepChange: number,
  searchParams: ReadonlyURLSearchParams
) => {
  const params = new URLSearchParams(searchParams.toString());
  const newStep = step + stepChange;
  if (step < 4 && step > 0) {
    params.set('step', `${newStep}`);
  } else {
    params.delete('step');
  }

  return `?${params.toString()}`;
};

export const getSkipHref = (searchParams: ReadonlyURLSearchParams) => {
  const params = new URLSearchParams(searchParams.toString());
  params.delete('step');
  params.delete('my-saving-product');

  return `?${params.toString()}`;
};
