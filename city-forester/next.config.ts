import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["maps.googleapis.com", "lh3.googleusercontent.com"],
  },
  // Set the target to "serverless" for deploying to Vercel
  /* config options here */
};

export default nextConfig;
