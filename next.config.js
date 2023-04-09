// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig


const withSVGR = require("next-svgr");

module.exports = withSVGR({
  reactStrictMode: true,
  /* other Next.js config options */
});