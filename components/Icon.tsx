/* eslint-disable jsx-a11y/alt-text */
import React, { forwardRef, HTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/utils/twMerge';

type IconProps = {
  size?: '12' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '48' | '52' | '56';
  imgClass?: HTMLAttributes<HTMLImageElement>['className'];
} & HTMLAttributes<HTMLDivElement> &
  ImageProps;

const sizeClass: { [key: string]: string } = {
  '12': 'w-[1.2rem] h-[1.2rem]',
  '16': 'w-[1.6rem] h-[1.6rem]',
  '20': 'w-[2rem] h-[2rem]',
  '24': 'w-[2.4rem] h-[2.4rem]',
  '28': 'w-[2.8rem] h-[2.8rem]',
  '32': 'w-[3.2rem] h-[3.2rem]',
  '36': 'w-[3.6rem] h-[3.6rem]',
  '40': 'w-[4rem] h-[4rem]',
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
      src,
      alt,
      loader,
      quality,
      priority,
      loading,
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
      unoptimized,
      overrideSrc,
      onLoad,
      onError,
      className: imgClass
    };

    return (
      <div
        className={cn(`${sizeClass[size]} relative overflow-hidden rounded-full`, className)}
        {...divProps}
        ref={ref}
      >
        <Image
          fill
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAL0lEQVR42u3NMQEAAAgDIJfcNPY0g4cfFCDT9S4SiUQikUgkEolEIpFIJBKJ5GYBnpg5OxOuJSoAAAAASUVORK5CYII='
          placeholder='blur'
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
