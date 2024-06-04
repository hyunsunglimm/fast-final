import { ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // 이렇게 해야 저희가 설정한 색상과 텍스트 클래스가 병합되지 않습니다.
      'font-size': [
        'text-48',
        'text-40',
        'text-36',
        'text-32',
        'text-28',
        'text-24',
        'text-20',
        'text-18',
        'text-16',
        'text-14',
        'text-12',
        'text-10'
      ]
    }
  }
});
/**
 * tailwind Class를 충돌없이 병합해주는 함수
 * @param inputs 스타일 조건, className
 * @returns class명을 return
 */
export const cn = (...inputs: ClassValue[]) => {
  return customTwMerge(clsx(inputs));
};
