/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: require('path').join(__dirname),
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
}

module.exports = nextConfig

