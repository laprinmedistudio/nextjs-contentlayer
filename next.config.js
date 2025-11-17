const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};


module.exports = {
  output: 'export', // genera HTML estático en /out
}

module.exports = withContentlayer(nextConfig);
