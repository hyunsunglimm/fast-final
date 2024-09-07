import React, { MouseEvent } from 'react';
import { Element, PreviousRegretType } from '@/shared/types/response/calendarHistroy';
import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import TextButton from '@/components/ui/TextButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchRegret } from '@/service/api/calendar';
import { categoryImgConfig } from '../../utils/categoryImgConfig';

type ExpenseItemProps = {
  data: Element;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

type PatchParamsType = {
  id: number;
  regret: boolean;
};
type ContextType = {
  previousRegret: PreviousRegretType | undefined;
};

const ExpenseItem = ({ data, onClick }: ExpenseItemProps) => {
  const queryClient = useQueryClient();
  const { id, cost, payType, place, isRegret, historyCategoryId } = data;

  const { mutate } = useMutation<Element, Error, PatchParamsType, ContextType>({
    mutationKey: ['patch_regret'],
    mutationFn: ({ id, regret }) => patchRegret(id, regret),
    onMutate: async ({ id, regret }) => {
      await queryClient.cancelQueries({ queryKey: ['calendarHistory'] });
      const previousRegret = queryClient.getQueryData<PreviousRegretType>(['calendarHistory']);

      if (!previousRegret) return { previousRegret };

      const historyList = previousRegret?.pages.flatMap((list) => list.historyList);
      const elements = historyList?.flatMap((el) => el.elements);

      const updatedElements = elements.map((item) =>
        item.id === id ? { ...item, isRegret: regret } : item
      );

      let elementIndex = 0;
      const updatedPages = previousRegret.pages.map((page) => {
        const pageElementsCount = page.historyList.elements.length;
        const newElements = updatedElements.slice(elementIndex, elementIndex + pageElementsCount);
        elementIndex += pageElementsCount;
        return {
          ...page,
          historyList: {
            ...page.historyList,
            elements: newElements
          }
        };
      });

      queryClient.removeQueries({ queryKey: ['regret'] });

      queryClient.setQueryData(['calendarHistory'], {
        pages: updatedPages,
        pageParams: previousRegret.pageParams
      });

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

  const categoryImgSrc = categoryImgConfig[historyCategoryId.imageUrlTypeNo]['imgSrc'];

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
          <Icon
            src={regretImgSrc}
            alt='후회'
            className='m-auto mb-6 block active:scale-95'
            size='28'
          />
          {isRegret && <p className='text-12 text-active'>후회 소비</p>}
        </FlexBox>
      </div>
    </li>
  );
};

export default ExpenseItem;
