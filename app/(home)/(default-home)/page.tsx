import dynamic from 'next/dynamic';
import HomeTopBannerCard from './_components/HomeTopBannerCard';
import BucketListCard from './_components/BucketListCard';
import DefaultBucketListCard from './_components/DefaultBucketListCard';
import { SqureSkeleton } from '@/components/ui/skeleton';
import { auth } from '@/auth';
const SwiperWrapper = dynamic(() => import('@/components/SwiperWrapper'), {
  ssr: false,
  loading: () => <SqureSkeleton />
});
const ChallengeCard = dynamic(() => import('./_components/ChallengeCard'), {
  ssr: false
});

const HomePage = async () => {
  const session = await auth();
  const res = await fetch(`http://localhost:3000/api/bucket?user-email=${session?.user?.email}`);
  const bucket = await res.json();

  return (
    <>
      <section className='mb-24 px-20'>
        <HomeTopBannerCard />
      </section>
      <section className='mb-24 px-20'>
        <SwiperWrapper dots>
          {bucket ? <BucketListCard bucket={bucket} /> : <DefaultBucketListCard />}
          <ChallengeCard />
        </SwiperWrapper>
      </section>
    </>
  );
};
export default HomePage;
