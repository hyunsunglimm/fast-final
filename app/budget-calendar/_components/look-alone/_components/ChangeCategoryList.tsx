import Text from '@/components/ui/Text';
import Icon from '@/components/Icon';
import { categoryImgConfig } from '@/app/budget-calendar/utils/categoryImgConfig';
import { useState } from 'react';

const ChangeCategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Text sizes='20' weight='700'>
        변경할 카테고리를 선택해주세요
      </Text>
      <ul className='mt-24'>
        {Object.entries(categoryImgConfig).map(([index, { category, imgSrc }]) => {
          const isSelected = selectedCategory === category;
          const textColorClass = isSelected ? 'text-primary' : 'text-gray-700';
          return (
            <li
              role='radio'
              aria-checked={isSelected}
              key={index}
              className='flex cursor-pointer items-center gap-x-16 py-12'
              onClick={() => handleCategorySelect(category)}
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
