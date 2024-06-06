import { SqureSkeleton, CardSkeleton } from '@/components/ui/skeleton';
import LoadingBackdrop from '@/components/ui/LoadingBackdrop';
const loading = () => {
  return (
    <div className='relative space-y-10 px-20'>
      <LoadingBackdrop />
      <CardSkeleton />
      <SqureSkeleton />
      <CardSkeleton />
    </div>
  );
};
export default loading;
