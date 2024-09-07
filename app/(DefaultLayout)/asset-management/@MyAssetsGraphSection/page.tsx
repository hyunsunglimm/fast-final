import dynamic from 'next/dynamic';
import SectionTitle from '@/components/SectionTitle';
import SwiperWrapper from '@/components/SwiperWrapper';
import IncreaseMyAssetCard from './_components/IncreaseMyAssetCard';
const AssetGraphCard = dynamic(() => import('./_components/AssetGraphCard'), { ssr: false });
const Ranking = dynamic(() => import('./_components/Ranking'), { ssr: false });

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
