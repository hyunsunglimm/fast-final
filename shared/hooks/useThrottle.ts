import { useRef } from 'react';

const useThrottle = <T extends unknown[]>(callback: (...args: T) => void, delay: number) => {
  const lastCall = useRef(0);

  return (...args: T) => {
    const now = new Date().getTime();
    if (now - lastCall.current < delay) {
      return;
    }
    lastCall.current = now;
    return callback(...args);
  };
};

export default useThrottle;
