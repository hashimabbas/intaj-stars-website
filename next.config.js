const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enable the app directory
  },
  images: {
    domains: [
      "cdn-icons-png.flaticon.com", // Example domain
      // Add other domains here
    ],
  },
};

module.exports = withNextIntl(nextConfig);

// const createNextIntlPlugin = require('next-intl/plugin');

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = withNextIntl(nextConfig);
