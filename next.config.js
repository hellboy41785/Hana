/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s4.anilist.co"],
  },
  env: {
    API_KEY: process.env.API_KEY,
    API_HOST: process.env.API_HOST,
    CLIENT_ID: process.env.CLIENT_ID
  },
};

module.exports = nextConfig;
