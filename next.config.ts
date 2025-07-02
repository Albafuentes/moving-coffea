import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  //images: { domains: [] },
  trailingSlash: false,
  output: 'standalone',
};

export default nextConfig;
