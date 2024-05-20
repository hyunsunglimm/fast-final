import { useState, useCallback, useEffect } from 'react';
import { debounce } from '@/utils/debounce';
import { useIsMounted } from '@/hooks/useIsMounted';

export const useWindowResize = () => {
  const [documentSize, setDocumentSize] = useState(0);

  const isMounted = useIsMounted();
  const handleResize = debounce(
    useCallback(() => {
      const documentWidth = document.documentElement.clientWidth;
      setDocumentSize(documentWidth);
    }, []),
    300
  );

  useEffect(() => {
    if (isMounted()) {
      window.addEventListener('resize', handleResize);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted, handleResize]);

  return { documentSize };
};
