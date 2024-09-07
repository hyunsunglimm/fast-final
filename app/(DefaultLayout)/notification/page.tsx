import React from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import TextButton from '@/components/ui/TextButton';
import { notiData } from './data';
import { returnDate } from '@/shared/utils/dateUtils';
import { currentUserSession } from '@/shared/actions/auth';
type Notification = {
  datetime: string;
  title: string;
};

type GroupedNotifications = {
  [date: string]: Notification[];
};
const NotiPage = async () => {
  const sortData = notiData.sort(
    (a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
  );

  const groupByDate = sortData.reduce<GroupedNotifications>((acc, cur) => {
    const today = new Date().toLocaleDateString();
    const date = new Date(cur.datetime).toLocaleDateString();
    const groupKey = date === today ? 'today' : 'prev';
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(cur);
    return acc;
  }, {});

  const { today, prev } = groupByDate;
  const session = await currentUserSession();
  const userName = session?.user?.name || '';
  return (
    <>
      <div className='py-12'>
        <FlexBox justifyContent='between' className='mb-12 rounded-sm bg-gray-100 p-16'>
          <Text className='text-gray-500'>알림이 꺼져있어요</Text>
          <TextButton className='text-14 text-primary'>알림 켜기 {'>'}</TextButton>
        </FlexBox>
      </div>

      {/* 오늘 알림 */}
      <Text className='inline-block py-12 text-gray-500'>오늘</Text>
      {today &&
        today.map((item) => {
          const { hour: currentTime } = returnDate();
          const { hour: dataTime } = returnDate(item.datetime);
          const timeText =
            currentTime - dataTime <= 1 ? '방금 전' : `${currentTime - dataTime}시간 전`;
          return (
            <FlexBox flexDirection='col' className='gap-6 py-12' key={item.title}>
              <Text sizes='16' weight='700'>
                {item.title.replace(/{USER_NAME}/g, `${userName}`)}
              </Text>
              <Text sizes='12' className='text-gray-500'>
                {timeText}
              </Text>
            </FlexBox>
          );
        })}

      <div className='my-12 h-[0.1rem] w-full bg-gray-100' aria-hidden />

      {/* 이전 알림 */}
      <Text className='inline-block py-12 text-gray-500'>이전 알림</Text>
      {prev.map((item) => {
        const { month, day } = returnDate(item.datetime);
        return (
          <FlexBox flexDirection='col' className='gap-6 py-12' key={item.title}>
            <Text sizes='16' weight='700'>
              {item.title.replace(/{USER_NAME}/g, `${userName}`)}
            </Text>
            <Text sizes='12' className='text-gray-500'>
              {month}월 {day}일
            </Text>
          </FlexBox>
        );
      })}
    </>
  );
};
export default NotiPage;
