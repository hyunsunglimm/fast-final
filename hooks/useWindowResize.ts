import { useState, useCallback, useEffect } from 'react';
import { useIsMounted } from '@/hooks/useIsMounted';

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const isMounted = useIsMounted();

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted, handleResize]);

  return { windowWidth: windowSize.width, windowHeight: windowSize.height };
};
