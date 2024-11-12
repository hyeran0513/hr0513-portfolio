/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://hyeran0513.github.io/hr0513-portfolio"
      : "",
};
 
module.exports = nextConfig;