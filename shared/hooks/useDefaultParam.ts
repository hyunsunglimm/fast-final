import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useDefaultParam = (paramName: string, defaultValue: string) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const paramValue = searchParams.get(paramName);
    if (!paramValue) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set(paramName, defaultValue);
      router.replace(`${pathname}?${newParams.toString()}`);
    }
  }, [router, searchParams, pathname, paramName, defaultValue]);
};

export default useDefaultParam;
