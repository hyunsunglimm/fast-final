import { create } from 'zustand';

type YearMonthState = {
  selectedYear: number;
  selectedMonth: number;
  setSelectedYearMonth: (year: number, month: number) => void;
};

export const useYearMonthStore = create<YearMonthState>((set) => {
  return {
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth() + 1,
    setSelectedYearMonth: (year: number, month: number) =>
      set({ selectedYear: year, selectedMonth: month })
  };
});
