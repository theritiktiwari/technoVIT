/** @type {import('next').NextConfig} */

const STUDIO_REWRITE = {
  source: "/admin/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/admin/:path*"
      : "/admin/index.html",
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.ingredientsnetwork.com",
      "standrewshospital.com.au",
      "www.concentrix.com",
      "i.imgur.com",
      "i.ibb.co",
    ],
  },
  swcMinify: true,
  rewrites: () => [STUDIO_REWRITE],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
