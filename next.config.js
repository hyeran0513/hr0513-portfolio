/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/hr0513-portfolio" : "",
  env: {
    ASSET_PREFIX: process.env.NODE_ENV === "production" ? "/hr0513-portfolio" : "",
  },
};
 
module.exports = nextConfig;