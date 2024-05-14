import ConsumeWeatherCard from './_components/ConsumeWeatherCard';
import DraggableCardContainer from './_components/DraggableCardContainer';
import BucketListCard from './_components/BucketListCard';
import HomeBanner from './_components/HomeBanner';
const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <BucketListCard
        badgeText='버킷리스트'
        headerText='유럽 여행가기'
        imagePath='/images/home-bucket-rabbit.png'
        targetAmount={2000000}
        currentAmount={350000}
        isChallenge={false}
      />
      <BucketListCard
        badgeText='챌린지'
        headerText='오늘의 나의 기분은?'
        subHeaderText='감정 통장 챌린지'
        imagePath='/images/home-bucket-rabbit.png'
        targetAmount={2000000}
        currentAmount={350000}
        isChallenge={true}
      />
      <ConsumeWeatherCard />
      {/* TODO
         내 계좌 바텀시트 */}
      {/* <div className='flex'>
        <input type='checkbox' id='drawer-toggle' className='peer sr-only relative' checked />
        <label
          htmlFor='drawer-toggle'
          className='absolute left-0 top-0 inline-block rounded-lg bg-indigo-500 p-4 transition-all duration-500 peer-checked:left-64 peer-checked:rotate-180'
        >
          <div className='mb-3 h-1 w-6 -rotate-45 rounded-lg bg-white'></div>
          <div className='h-1 w-6 rotate-45 rounded-lg bg-white'></div>
        </label>
        <div className='fixed left-0 top-0 z-20 h-full w-64 -translate-x-full transform bg-white shadow-lg transition-all duration-500 peer-checked:translate-x-0'>
          <div className='px-6 py-4'>
            <h2 className='text-lg font-semibold'>Drawer</h2>
            <p className='text-gray-500'>This is a drawer.</p>
          </div>
        </div>
      </div> */}
      {/* <DraggableCardContainer /> */}
    </>
  );
};
export default HomePage;
