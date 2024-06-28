/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
