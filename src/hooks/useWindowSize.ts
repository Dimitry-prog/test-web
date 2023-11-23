import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};
