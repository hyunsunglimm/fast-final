/**
 * @param value 문자열 밸류
 * @returns 콤마 삭제 후 넘버타입으로 리턴
 */
export const deleteCommaReturnNumber = (value: string): number => {
  const deleteCommaValue = value.replace(/,/g, '');
  return Number(deleteCommaValue);
};
