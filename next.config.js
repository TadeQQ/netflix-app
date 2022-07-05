/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "images-na.ssl-images-amazon.com",
      "ia.media-imdb.com",
      "cph-p2p-msl.akamaized.net",
      "unsplash.com",
    ],
  },
};

module.exports = withVanillaExtract(nextConfig);
