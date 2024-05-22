/* eslint-disable jsx-a11y/alt-text */
import React, { forwardRef, HTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/utils/twMerge';

type IconProps = {
  size?: '16' | '20' | '24' | '28' | '32' | '36' | '40' | '48';
  imgClass?: HTMLAttributes<HTMLImageElement>['className'];
} & HTMLAttributes<HTMLDivElement> &
  ImageProps;

const sizeClass: { [key: string]: string } = {
  '16': 'w-[1.6rem] h-[1.6rem]',
  '20': 'w-[2rem] h-[2rem]',
  '24': 'w-[2.4rem] h-[2.4rem]',
  '28': 'w-[2.8rem] h-[2.8rem]',
  '32': 'w-[3.2rem] h-[3.2rem]',
  '36': 'w-[3.6rem] h-[3.6rem]',
  '40': 'w-[4rem] h-[4rem]',
  '48': 'w-[4.8rem] h-[4.8rem]'
};

/**
 * @src 이미지 주소
 * @alt 이미지 대체 테스트
 * @size 이미지 사이즈 16~48
 * @imgClass Image태그에 들어갈 className
 * @imgProps NextImage props
 */
const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ size = '24', imgClass, className, ...props }, ref) => {
    const {
      src,
      alt,
      loader,
      quality,
      priority,
      loading,
      placeholder,
      blurDataURL,
      unoptimized,
      overrideSrc,
      onLoad,
      onError,
      ...divProps
    } = props;
    const imageProps: ImageProps = {
      src,
      alt,
      loader,
      quality,
      priority,
      loading,
      placeholder,
      blurDataURL,
      unoptimized,
      overrideSrc,
      onLoad,
      onError,
      className: imgClass
    };

    return (
      <div
        className={cn(`${sizeClass[size]} relative overflow-hidden`, className)}
        {...divProps}
        ref={ref}
      >
        <Image
          // blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAL0lEQVR42u3NQQ0AAAgEIK9/B3vYzhQ+3KAAma5TEQgEAoFAIBAIBAKBQCAQfAoWm4pAgU0zEmgAAAAASUVORK5CYII='
          // placeholder='blur'
          fill
          sizes='auto'
          className={imgClass}
          {...imageProps}
        />
      </div>
    );
  }
);

Icon.displayName = 'Icon';
export default Icon;
