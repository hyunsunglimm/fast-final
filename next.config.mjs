/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    minimumCacheTTL: 86400,
    path: '',
    loaderFile: './shared/utils/imageLoader.ts'
  }
};

export default nextConfig;
