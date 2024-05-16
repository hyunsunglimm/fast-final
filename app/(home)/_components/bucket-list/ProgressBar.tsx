'use client';
import { useEffect, useState } from 'react';

export const ProgressBar = ({ progressPercent }: { progressPercent: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(progressPercent);
    }, 300);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='h-[0.8rem] w-full rounded-full bg-white/30'>
      <div
        className='h-[0.8rem] rounded-full bg-white duration-200'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
