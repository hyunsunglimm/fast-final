import HomeBanner from './_components/HomeBanner';
import HomeWidgetSection from './_components/HomeWidgetSection';
import BucketListCard from './_components/BucketListCard';
import ChallengeCard from './_components/ChallengeCard';
import MotionCarousel from '@/components/MotionCarousel';

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
      </section>
    </>
  );
};
export default HomePage;
