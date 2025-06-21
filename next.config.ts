import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  experimental: {
    // Disable static optimization for problematic pages
    workerThreads: false,
    cpus: 1
  },
  // Ensure proper handling of dynamic routes
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
