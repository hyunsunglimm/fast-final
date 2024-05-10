import Text from '@/components/ui/Text';
import { Card, CardContent } from '@/components/ui/card';
import DraggableCardContainer from './_components/DraggableCardContainer';
import BucketListCard from './_components/BucketListCard';

const HomePage = () => {
  return (
    <div>
      <BucketListCard />
      <Card>
        <CardContent className='gap-x-4 px-5 py-6' alignItems='center'>
          <div className='h-[100px] w-[68px] bg-orange-500'>버킷 리스트</div>
          <CardContent flexDirection='col'>
            <Text>오늘 소비 날씨는</Text>
            <Text sizes='title18' weight='bold'>
              천둥번개가 쳐요!
            </Text>
            <Text sizes='caption12' className='text-gray-500'>
              예산보다{' '}
              <Text weight='bold' className='text-orange-500'>
                1,000,000원
              </Text>{' '}
              더 썼어요.
            </Text>
          </CardContent>
        </CardContent>
      </Card>
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
      <DraggableCardContainer />
    </div>
  );
};
export default HomePage;
