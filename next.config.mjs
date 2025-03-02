/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable optimization to allow local images
  },
  experimental: {
    middlewarePrefetch: "strict", // Ensure middleware does not affect static files
  },
};

export default nextConfig;
