/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    minimumCacheTTL: 86400,
    path: '',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  }
};

export default nextConfig;
