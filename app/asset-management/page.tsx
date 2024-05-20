import NetWorthSection from './_components/NetWorthSection';
import MyCreditSection from './_components/MyCreditSection';
import CollectAssetSection from './_components/CollectAssetSection';
import UpcomingScheduleSection from './_components/UpcomingScheduleSection';
import MyAssetsGraphSection from './_components/MyAssetsGraphSection';
const AssetManagementPage = () => {
  return (
    <>
      <NetWorthSection />
      <div className='px-20'>
        <MyCreditSection />
        <CollectAssetSection />
        <UpcomingScheduleSection />
        <MyAssetsGraphSection />
      </div>
    </>
  );
};

export default AssetManagementPage;
