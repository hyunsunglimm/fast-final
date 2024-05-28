import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useQueryString = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams.toString());

  const queryValue = (queryKey: string) => searchParams.get(queryKey);
  const queryValues = (queryKey: string) => searchParams.getAll(queryKey);

  return { searchParams, router, pathname, params, queryValue, queryValues };
};
