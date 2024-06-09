export const localeStringToNumber = (str: string) => {
  const cleanStr = str.replace(/,/g, '');
  const number = Number(cleanStr);
  return number;
};
