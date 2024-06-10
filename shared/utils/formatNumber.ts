export const formatNumber = (number: number): string => {
  const absNumber = Math.abs(number);
  return number < 0 ? `-${absNumber.toLocaleString()}` : `${absNumber.toLocaleString()}`;
};
