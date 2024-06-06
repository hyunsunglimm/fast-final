import { Metadata } from 'next';
import SelectCategory from './_components/SelectCategory';

export const metadata: Metadata = {
  title: 'PORKO | 비교 기준 항목 선택',
  description: 'PORKO 비교 기준 항목 선택 페이지'
};

const SelectCategoryPage = () => <SelectCategory />;

export default SelectCategoryPage;
