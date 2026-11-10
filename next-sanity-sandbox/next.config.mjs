/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@calcom/cal-sans-ui"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
