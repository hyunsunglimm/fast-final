import NetWorthSection from './_components/NetWorthSection';
import MyCreditSection from './_components/MyCreditSection';
import CollectAssetSection from './_components/CollectAssetSection';
import UpcomingScheduleSection from './_components/UpcomingScheduleSection';
import MyAssetsGraphSection from './_components/MyAssetsGraphSection';
const AssetManagementPage = () => {
  return (
    <>
      <section>
        <NetWorthSection />
      </section>
      <section className='px-20'>
        <MyCreditSection />
      </section>
      <section className='px-20'>
        <CollectAssetSection />
      </section>
      <section className='px-20'>
        <UpcomingScheduleSection />
      </section>
      <section className='px-20 pb-[13.2rem]'>
        <MyAssetsGraphSection />
      </section>
    </>
  );
};

export default AssetManagementPage;
