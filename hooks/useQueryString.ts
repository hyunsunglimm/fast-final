import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export const useQueryString = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const params = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

  const queryValue = (queryKey: string) => searchParams.get(queryKey);
  const queryValues = (queryKey: string) => searchParams.getAll(queryKey);

  return { searchParams, router, pathname, params, queryValue, queryValues };
};
