/* eslint-disable jsx-a11y/alt-text */
import React, { forwardRef, HTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/shared/utils/twMerge';

export type IconProps = {
  size?:
    | '12'
    | '16'
    | '20'
    | '24'
    | '28'
    | '28.8'
    | '32'
    | '34'
    | '36'
    | '40'
    | '44'
    | '48'
    | '52'
    | '56';
  imgClass?: HTMLAttributes<HTMLImageElement>['className'];
} & HTMLAttributes<HTMLDivElement> &
  ImageProps;

const sizeClass: { [key: string]: string } = {
  '12': 'w-[1.2rem] h-[1.2rem]',
  '16': 'w-[1.6rem] h-[1.6rem]',
  '20': 'w-[2rem] h-[2rem]',
  '24': 'w-[2.4rem] h-[2.4rem]',
  '28': 'w-[2.8rem] h-[2.8rem]',
  '28.8': 'w-[2.88rem] h-[2.88rem]',
  '32': 'w-[3.2rem] h-[3.2rem]',
  '34': 'w-[3.4rem] h-[3.4rem]',
  '36': 'w-[3.6rem] h-[3.6rem]',
  '40': 'w-[4rem] h-[4rem]',
  '44': 'w-[4.4rem] h-[4.4rem]',
  '48': 'w-[4.8rem] h-[4.8rem]',
  '52': 'w-[5.2rem] h-[5.2rem]',
  '56': 'w-[5.6rem] h-[5.6rem]'
};

/**
 
@src 이미지 주소
@alt 이미지 대체 테스트
@size 이미지 사이즈 16~48
@imgClass Image태그에 들어갈 className
@imgProps NextImage props
*/
const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ size = '24', imgClass, className, ...props }, ref) => {
    const {
      id,
      src,
      alt,
      loader,
      quality,
      placeholder = 'blur',
      priority,
      loading,
      unoptimized,
      overrideSrc,
      onLoad,
      onError,
      ...divProps
    } = props;
    const imageProps: ImageProps = {
      id,
      src,
      alt,
      loader,
      quality,
      placeholder,
      priority,
      loading,
      unoptimized,
      overrideSrc,
      onLoad,
      onError,
      className: imgClass
    };

    return (
      <i
        id={id}
        aria-label={alt}
        className={cn(
          `${sizeClass[size]} relative inline-block overflow-hidden rounded-full`,
          className
        )}
        {...divProps}
        ref={ref}
      >
        <Image
          aria-hidden
          fill
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAL0lEQVR42u3NMQEAAAgDIJfcNPY0g4cfFCDT9S4SiUQikUgkEolEIpFIJBKJ5GYBnpg5OxOuJSoAAAAASUVORK5CYII='
          placeholder={placeholder}
          sizes='auto'
          className={imgClass}
          {...imageProps}
        />
      </i>
    );
  }
);

Icon.displayName = 'Icon';
export default Icon;
