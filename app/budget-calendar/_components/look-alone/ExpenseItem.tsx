import React, { MouseEvent } from 'react';
import {
  HistoryListItemType,
  CalendarHistroyResponse
} from '@/shared/types/response/calendarHistroy';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import TextButton from '@/components/ui/TextButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchRegret } from '@/service/api/calendar';
import { categoryImgConfig } from '../../utils/categoryImgConfig';

type ExpenseItemProps = {
  data: HistoryListItemType;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

type PatchParamsType = {
  id: number;
  regret: boolean;
};
type ContextType = {
  previousRegret: CalendarHistroyResponse | undefined;
};

const ExpenseItem = ({ data, onClick }: ExpenseItemProps) => {
  const queryClient = useQueryClient();
  const { id, cost, payType, place, isRegret, historyCategoryId } = data;

  const { mutate } = useMutation<HistoryListItemType, Error, PatchParamsType, ContextType>({
    mutationKey: ['patch_regret'],
    mutationFn: ({ id, regret }) => patchRegret(id, regret),
    onMutate: async ({ id, regret }) => {
      await queryClient.cancelQueries({ queryKey: ['calendarHistory'] });
      const previousRegret = queryClient.getQueryData<CalendarHistroyResponse>(['calendarHistory']);

      if (previousRegret) {
        const updatedHistoryList = previousRegret.historyList.map((item) =>
          item.id === id ? { ...item, isRegret: regret } : item
        );
        const updatedData = {
          ...previousRegret,
          historyList: updatedHistoryList
        };

        queryClient.setQueryData(['calendarHistory'], updatedData);
      }

      return { previousRegret };
    },
    onError: (err, data, context) => {
      if (context?.previousRegret) {
        queryClient.setQueryData(['calendarHistory'], context.previousRegret);
      }
    },
    onSettled: async () => await queryClient.invalidateQueries({ queryKey: ['calendarHistory'] })
  });

  const regretImgSrc = isRegret
    ? '/icons/categories/background/categories-regret.svg'
    : '/icons/weather/consumption/weather-none.svg';

  const categoryImgSrc = categoryImgConfig[historyCategoryId.imageUrlTypeNo];

  return (
    <li className='mt-24 flex min-h-[5.2rem] items-center justify-between gap-[1.6rem]'>
      <Icon src={categoryImgSrc} alt={place} size='40' className='shrink-0' />
      <div className='w-full'>
        <TextButton
          id={String(id)}
          onClick={onClick}
          className='mb-4 text-16 font-700'
          aria-label='소비 상세 내역 열기'
        >
          {cost > 0 && '+'}
          {cost.toLocaleString()} 원
        </TextButton>
        <div className='flex gap-[0.2rem] text-12 text-gray-500'>
          <span>{place}</span>
          <span>|</span>
          <span>{payType}</span>
        </div>
      </div>
      <div className='shrink-0'>
        <FlexBox
          onClick={() => mutate({ id, regret: !isRegret })}
          role='button'
          flexDirection='col'
          className='min-w-[5rem]'
          alignItems='center'
        >
          <Icon src={regretImgSrc} alt='후회' className='m-auto mb-6 block' size='28' />
          {isRegret && <p className='text-12 text-active'>후회 소비</p>}
        </FlexBox>
      </div>
    </li>
  );
};

export default ExpenseItem;
