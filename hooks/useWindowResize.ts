/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useCallback, useEffect } from 'react';
import { useIsMounted } from '@/hooks/useIsMounted';

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth || 0,
    height: window.innerHeight || 0
  });

  const isMounted = useIsMounted();

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

  return { windowWidth: windowSize.width, windowHeight: windowSize.height };
};
