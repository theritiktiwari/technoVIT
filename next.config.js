/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
}

module.exports = nextConfig
