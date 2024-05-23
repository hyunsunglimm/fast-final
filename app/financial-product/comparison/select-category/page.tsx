'use client';

import Icon from '@/components/Icon';
import { IsBackHeader } from '@/components/header';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import BottomButton from '../_components/BottomButton';

const categories = [
  { title: '대중교통', iconPath: '/icons/product/product-traffic.svg' },
  { title: '쇼핑', iconPath: '/icons/product/product-shopping.svg' },
  { title: '카페', iconPath: '/icons/product/product-cafe.svg' },
  { title: '편의점', iconPath: '/icons/product/product-cvs.svg' },
  { title: '마트', iconPath: '/icons/product/product-mart.svg' },
  { title: '문화', iconPath: '/icons/product/product-culture.svg' },
  { title: '백화점', iconPath: '/icons/product/product-stores.svg' },
  { title: '통신비', iconPath: '/icons/product/product-communication.svg' },
  { title: '주유', iconPath: '/icons/product/product-oiling.svg' },
  { title: '여행', iconPath: '/icons/product/product-travel.svg' },
  { title: '온라인', iconPath: '/icons/product/product-online.svg' },
  { title: '구독', iconPath: '/icons/product/product-subscribe.svg' }
];

const QUERY_KEY = 'category';

const SelectCategoryPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategories = searchParams.getAll(QUERY_KEY);

  const params = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

  useEffect(() => {
    if (selectedCategories.length > 2) {
      params.delete(QUERY_KEY, selectedCategories[0]);
      router.push(pathname + '?' + params.toString(), { scroll: false });
    }
  }, [selectedCategories, pathname, router, params]);

  const onSelect = (title: string) => {
    if (selectedCategories.includes(title)) {
      params.delete(QUERY_KEY, title);
    } else {
      params.append(QUERY_KEY, title);
    }

    router.push(pathname + '?' + params.toString(), {
      scroll: false
    });
  };

  return (
    <>
      <IsBackHeader href={`./?${searchParams.toString()}`} />
      <section className='px-20 pb-[13.2rem]'>
        <FlexBox flexDirection='col' className='gap-8'>
          <Text sizes='24' weight='500'>
            어떤 항목을 기준으로 <br /> 비교하고 싶으세요?
          </Text>
          <Text sizes='16' weight='500'>
            최대 2개까지만 선택할 수 있어요!
          </Text>
        </FlexBox>
        <ul className='mt-28 grid grid-cols-3 gap-12'>
          {categories.map(({ title, iconPath }) => {
            const isSelected = selectedCategories.some((c) => c === title);

            return (
              <li key={title}>
                <Card
                  className={`flex flex-col items-center justify-center gap-6 px-24 pb-16 pt-28 ${isSelected && 'relative ring-1 ring-primary'}`}
                  onClick={() => onSelect(title)}
                >
                  <Icon src={iconPath} alt='bus icon' size='40' />
                  <Text>{title}</Text>
                  {isSelected && (
                    <Icon
                      src='/icons/system-icon/checkbox/checkbox-on.svg'
                      alt='check icon'
                      size='20'
                      className='absolute right-[0.8rem] top-[0.8rem]'
                    />
                  )}
                </Card>
              </li>
            );
          })}
        </ul>
      </section>
      {selectedCategories.length >= 2 && (
        <BottomButton
          title='결과보기'
          path='/financial-product/comparison/select-category/result'
        />
      )}
    </>
  );
};

export default SelectCategoryPage;
