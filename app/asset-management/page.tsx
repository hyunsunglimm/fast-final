import NetWorthSection from './_components/NetWorthSection';
import MyCreditSection from './_components/MyCreditSection';
import CollectAssetSection from './_components/CollectAssetSection';
const AssetManagementPage = () => {
  return (
    <>
      <section className='pt-20'>
        <NetWorthSection />
      </section>
      <section className='px-20'>
        <MyCreditSection />
      </section>
      <section className='px-20'>
        <CollectAssetSection />
      </section>
    </>
  );
};

export default AssetManagementPage;
