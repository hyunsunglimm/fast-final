/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    minimumCacheTTL: 86400,
    path: '',
    loaderFile: './shared/utils/imageLoader.ts'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  }
};

export default nextConfig;
