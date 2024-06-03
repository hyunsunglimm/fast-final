import { useSearchParams } from 'next/navigation';

const useGetHref = () => {
  const searchParams = useSearchParams();

  const getLinkHref = (step: number, stepChange: number) => {
    const params = new URLSearchParams(searchParams.toString());
    const newStep = step + stepChange;
    if (step <= 4 && step > 0) {
      params.set('step', `${newStep}`);
    } else {
      params.delete('step');
    }

    return `?${params.toString()}`;
  };

  const getSkipHref = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('step');
    params.delete('my-saving-product');

    return `?${params.toString()}`;
  };

  return { getLinkHref, getSkipHref };
};

export default useGetHref;
