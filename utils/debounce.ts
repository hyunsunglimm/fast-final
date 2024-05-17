/**
 * @param func 디바운스가 적용 될 함수
 * @param delay 지연시간 ms
 * @returns 디바운스가 적용 된 함수
 */
export const debounce = <T extends unknown[]>(func: (...args: T) => void, delay: number) => {
  let timerId: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), delay);
  };
};
