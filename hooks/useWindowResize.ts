/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useCallback, useEffect } from 'react';
import { useIsMounted } from '@/hooks/useIsMounted';
import { debounce } from '@/utils/debounce';
export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  const isMounted = useIsMounted();

  const handleResize = useCallback(
    debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }, 300),
    []
  );

  useEffect(() => {
    if (!isMounted()) return;

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return { windowWidth: windowSize.width, windowHeight: windowSize.height };
};
