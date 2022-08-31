/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "chennai.vit.ac.in",
      "www.ingredientsnetwork.com",
      "standrewshospital.com.au",
      "www.concentrix.com",
      "i.imgur.com",
      "i.ibb.co",
    ],
  },
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig
