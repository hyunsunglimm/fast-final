import dynamic from 'next/dynamic';
import HomeTopBannerCard from './_components/HomeTopBannerCard';
import HomeWidgetSection from './_components/HomeWidgetSection';
import BucketListCard from './_components/BucketListCard';
import DefaultBucketListCard from './_components/DefaultBucketListCard';
import { CardSkeleton } from '@/components/ui/skeleton';
import SwiperWrapper from '@/components/SwiperWrapper';
const ChallengeCard = dynamic(() => import('./_components/ChallengeCard'), {
  ssr: false
});
const HomeAiBannerCard = dynamic(() => import('./_components/HomeAiBannerCard'), {
  ssr: false,
  loading: () => <CardSkeleton />
});

const HomePage = () => {
  return (
    <>
      <section className='mb-20 px-20'>
        <HomeTopBannerCard />
      </section>
      <section className='mb-24 px-20'>
        <SwiperWrapper dots>
          <DefaultBucketListCard />
          <BucketListCard />
          <ChallengeCard />
        </SwiperWrapper>
      </section>
      <section className='px-20'>
        <HomeWidgetSection />
        <HomeAiBannerCard />
      </section>
    </>
  );
};
export default HomePage;
