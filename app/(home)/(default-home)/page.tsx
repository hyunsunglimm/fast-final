import dynamic from 'next/dynamic';
import HomeTopBannerCard from './_components/HomeTopBannerCard';
import BucketListCard from './_components/BucketListCard';
import DefaultBucketListCard from './_components/DefaultBucketListCard';
const SwiperWrapper = dynamic(() => import('@/components/SwiperWrapper'), {
  ssr: false
});
const ChallengeCard = dynamic(() => import('./_components/ChallengeCard'), {
  ssr: false
});

const HomePage = () => {
  return (
    <>
      <section className='mb-24 px-20'>
        <HomeTopBannerCard />
      </section>
      <section className='mb-24 px-20'>
        <SwiperWrapper dots>
          <DefaultBucketListCard />
          <BucketListCard />
          <ChallengeCard />
        </SwiperWrapper>
      </section>
    </>
  );
};
export default HomePage;
