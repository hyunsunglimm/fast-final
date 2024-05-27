import dynamic from 'next/dynamic';
import HomeBanner from './_components/HomeBanner';
import HomeWidgetSection from './_components/HomeWidgetSection';
import MotionCarousel from '@/components/MotionCarousel';
import BucketListCard from './_components/BucketListCard';
import { CardSkeleton } from '@/components/ui/skeleton';

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
      <section className='px-20'>
        <HomeBanner />
      </section>
      <section className='mb-24 px-20'>
        <MotionCarousel>
          <BucketListCard />
          <ChallengeCard />
        </MotionCarousel>
      </section>
      <section className='px-20'>
        <HomeWidgetSection />
        <HomeAiBannerCard />
      </section>
    </>
  );
};
export default HomePage;
