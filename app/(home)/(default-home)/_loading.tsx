import React from 'react';
import { SqureSkeleton, CardSkeleton } from '@/components/ui/skeleton';
import WidgetSkeleton from './_components/WidgetSkeleton';
const loading = () => {
  return (
    <div className='space-y-10 px-20'>
      <CardSkeleton />
      <SqureSkeleton />
      <WidgetSkeleton />
      <CardSkeleton />
    </div>
  );
};
export default loading;
