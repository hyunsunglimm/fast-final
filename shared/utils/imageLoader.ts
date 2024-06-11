'use client';
import type { ImageLoaderProps } from 'next/image';

const cloudfrontLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (src.startsWith('https://cdn.sanity.io')) {
    const url = new URL(src);
    url.searchParams.set('format', 'webp');
    url.searchParams.set('width', width.toString());
    url.searchParams.set('quality', (quality || 75).toString());
    return url.href;
  } else {
    const url = new URL(`https://d1i4t0v3ws2guw.cloudfront.net${src}`);
    url.searchParams.set('format', 'webp');
    url.searchParams.set('width', width.toString());
    url.searchParams.set('quality', (quality || 75).toString());
    return url.href;
  }
};

export default cloudfrontLoader;
