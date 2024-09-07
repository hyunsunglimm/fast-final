import RoundedSkeleton from '@/app/(DefaultLayout)/create-bucket/_components/RoundedSkeleton';

const MyWalletSkeleton = () => {
  return (
    <div className='animate-pulse'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <div className='mb-2 h-4 w-24 rounded bg-gray-200'></div>
          <div className='h-6 w-32 rounded bg-gray-200'></div>
        </div>
        <div className='h-8 w-16 rounded bg-gray-200'></div>
      </div>
      <div className='mt-20 space-y-8'>
        <RoundedSkeleton />
        <RoundedSkeleton />
        <RoundedSkeleton />
      </div>
    </div>
  );
};

export default MyWalletSkeleton;
