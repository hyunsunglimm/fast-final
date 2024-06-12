export const formatPart = (part: number, unit: string): string => {
  const thousands = Math.floor(part / 1000);
  const remainder = part % 1000;

  let partStr = '';
  if (thousands > 0) {
    partStr += `${thousands}천`;
  }
  if (remainder > 0) {
    partStr += `${remainder}`;
  }

  return partStr + unit;
};

// 단위 변환기
// ex) 15000 => 1만5천원
export const formatCurrency = (amount = 0): string => {
  if (amount === 0) return '0원';

  const units = ['', '만', '억'];
  const result: string[] = [];

  let unitIndex = 0;

  while (amount > 0) {
    const part = amount % 10000;
    if (part > 0) {
      const formattedPart = formatPart(part, units[unitIndex]);
      result.unshift(formattedPart);
    }
    amount = Math.floor(amount / 10000);
    unitIndex++;
  }

  return result.join('') + '원';
};
