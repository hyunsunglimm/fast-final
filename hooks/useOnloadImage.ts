import { useState, useCallback } from 'react';
const useOnloadImage = () => {
  const [onload, setOnload] = useState(false);

  const onLoadImage = useCallback(() => {
    setOnload(true);
  }, []);

  return { onload, onLoadImage };
};

export default useOnloadImage;
