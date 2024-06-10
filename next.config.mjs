/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    path: '',
    loaderFile: './shared/utils/imageLoader.ts'
  }
};

export default nextConfig;
