/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1262351007,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "c162bb069b820eeb3eedcd98c2f0def3",
  },
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
