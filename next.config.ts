import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // This tells Next.js to export as a static site
  trailingSlash: true, // Ensures URLs have a trailing slash for static routing
};

export default nextConfig;
