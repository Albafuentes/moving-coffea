import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  //images: { domains: [] },
  trailingSlash: false,
  output: 'standalone',
  
  webpack: (config) => {
    config.resolve.alias['<YOUR MODULE NAME>'] = path.resolve(
      '<YOUR MODULE PATH AS SHOWN IN THE WARNING>'
    );
    return config;
  },

};

export default nextConfig;
