import { useEffect, useState, MutableRefObject } from 'react';
import { useWindowResize } from '@/hooks/useWindowResize';

export const useTotalWidth = (ref: MutableRefObject<HTMLElement | null>) => {
  const [totalWidth, setTotalWidth] = useState(0);
  const { windowWidth } = useWindowResize();

  useEffect(() => {
    if (ref.current) {
      const childNodes = ref.current.childNodes;
      let width = 0;
      childNodes.forEach((node) => {
        const element = node as HTMLElement;
        const rect = element.getBoundingClientRect();
        width += rect.width;
      });

      setTotalWidth(width);
    }
  }, [ref, windowWidth]);

  return { totalWidth, ref };
};
