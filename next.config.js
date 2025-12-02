/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/proba1',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

