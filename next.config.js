/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/hr0513-portfolio/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/hr0513-portfolio" : "",
};
 
module.exports = nextConfig;