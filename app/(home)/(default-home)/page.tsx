import dynamic from 'next/dynamic';
import HomeBanner from './_components/HomeBanner';
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
        <HomeBanner />
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
