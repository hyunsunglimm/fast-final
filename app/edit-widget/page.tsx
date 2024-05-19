import FlexBox from '@/components/ui/FlexBox';
import { IsBackHeader } from '@/components/Header';
import Text from '@/components/ui/Text';
import TopContents from './_components/TopContents';
import React from 'react';
import IsEditWidgetItem from './_components/IsEditWidgetItem';
import { widgetData } from '../(home)/_components/HomeWidgetSection';

const EditWidgetPage = () => {
  return (
    <>
      <IsBackHeader title='한 눈에 보기 편집' href='/' />
      <TopContents />
      <div className='grid grid-cols-2 gap-x-[2rem] gap-y-[1.9rem] px-[2rem]'>
        {widgetData.map((item) => {
          return (
            <React.Fragment key={item.title}>
              {item.fiexd && (
                <IsEditWidgetItem key={item.title} title={item.title}></IsEditWidgetItem>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div aria-hidden className='my-[2rem] h-[1.1rem] bg-gray-50'></div>
      <div className='bg-white px-[2rem] pb-[16.8rem]'>
        <div className='mb-[2.4rem]'>
          <Text sizes='20' weight='700'>
            숨긴 항목
          </Text>
        </div>
        <FlexBox flexDirection='col' className='gap-y-[3.2rem] '>
          {widgetData.map((item) => {
            return (
              <React.Fragment key={item.title}>
                {!item.fiexd && (
                  <FlexBox justifyContent='between' className='w-full'>
                    <Text sizes='18' weight='500' className='text-gray-700'>
                      {item.title}
                    </Text>
                    <button
                      aria-label='항목 추가'
                      // disabled
                      className='group relative flex aspect-square w-[2.8rem] items-center justify-center rounded-full bg-primary disabled:cursor-not-allowed disabled:bg-gray-200'
                    >
                      <span className='absolute h-[0.3rem] w-[1.6rem] rounded-lg bg-white group-disabled:bg-gray-400'></span>
                      <span className='absolute h-[0.3rem] w-[1.6rem] rotate-90 rounded-lg bg-white group-disabled:bg-gray-400'></span>
                    </button>
                  </FlexBox>
                )}
              </React.Fragment>
            );
          })}
        </FlexBox>
      </div>
    </>
  );
};
export default EditWidgetPage;
