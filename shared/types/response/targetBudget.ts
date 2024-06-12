// 목표 예산 사용률 조회
export type BudgetInquiryResponse = {
  used: number;
};

// 목표 예산 설정 (저번 달 지출 금액 조회)
export type LastMonthInquiryResponse = {
  used: number;
};
