/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/chase-web-guide',
  assetPrefix: '/chase-web-guide/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
