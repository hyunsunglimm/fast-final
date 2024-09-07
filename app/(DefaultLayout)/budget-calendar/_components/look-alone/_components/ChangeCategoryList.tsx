import Text from '@/components/ui/Text';
import Icon from '@/components/Icon';
import { useState } from 'react';
import { SpendingDetailResponse } from '@/shared/types/response/calendarHistroy';
import { categoryImgConfig } from '../../../utils/categoryImgConfig';

type ChangeCategoryListProps = {
  expenseDetailData: SpendingDetailResponse | undefined;
};

const ChangeCategoryList = ({ expenseDetailData }: ChangeCategoryListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategorySelect = (index: number) => {
    setSelectedCategory(index);
  };
  const defaultCategory = expenseDetailData?.historyCategoryId.imageUrlTypeNo ?? 0;
  return (
    <>
      <Text sizes='20' weight='700'>
        변경할 카테고리를 선택해주세요
      </Text>
      <ul className='mt-24 max-h-[31rem]'>
        {Object.entries(categoryImgConfig).map(([index, { category, imgSrc }]) => {
          const isSelected =
            selectedCategory === Number(index) ||
            (selectedCategory === null && defaultCategory === Number(index));

          const textColorClass = isSelected ? 'text-primary' : 'text-gray-700';
          return (
            <li
              role='radio'
              aria-checked={isSelected}
              key={index}
              className='flex cursor-pointer items-center gap-x-16 py-12'
              onClick={() => handleCategorySelect(Number(index))}
            >
              <Icon src={imgSrc} alt={`${category} 아이콘`} size='32' />
              <Text className={`${textColorClass}`}>{category}</Text>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ChangeCategoryList;
