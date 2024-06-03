import dynamic from 'next/dynamic';
import SectionTitle from '@/components/SectionTitle';
import SwiperWrapper from '@/components/SwiperWrapper';
import IncreaseMyAssetCard from './swiper-card-list/IncreaseMyAssetCard';
const AssetGraphCard = dynamic(() => import('./swiper-card-list/AssetGraphCard'), { ssr: false });
const Ranking = dynamic(() => import('./swiper-card-list/Ranking'), { ssr: false });

const MyAssetsGraphSection = () => {
  return (
    <>
      <SectionTitle>내 자산은 어떻게</SectionTitle>
      <SwiperWrapper dots>
        <IncreaseMyAssetCard />
        <Ranking />
        <AssetGraphCard />
      </SwiperWrapper>
    </>
  );
};
export default MyAssetsGraphSection;
