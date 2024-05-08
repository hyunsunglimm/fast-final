import { ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // 이렇게 해야 저희가 설정한 색상과 텍스트 클래스가 병합되지 않습니다.
      'font-size': [
        'text-data48',
        'text-data40',
        'text-data36',
        'text-title32',
        'text-title28',
        'text-title24',
        'text-title20',
        'text-title18',
        'text-body16',
        'text-body14',
        'text-caption12',
        'text-caption10'
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
