/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: process.env.ASSET_PREFIX || "",
  env: {
    ASSET_PREFIX: process.env.ASSET_PREFIX || "",
  },
};

module.exports = nextConfig;