import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dashboard.mediaweb.app/api/:path*',
      },
    ];
  },
  async redirects() {
    return [
      // Auth pages
      {
        source: '/login',
        destination: 'https://dashboard.mediaweb.app/login',
        permanent: true,
      },
      {
        source: '/register',
        destination: 'https://dashboard.mediaweb.app/register',
        permanent: true,
      },
      {
        source: '/forgot-password',
        destination: 'https://dashboard.mediaweb.app/forgot-password',
        permanent: true,
      },
      {
        source: '/verification',
        destination: 'https://dashboard.mediaweb.app/verification',
        permanent: true,
      },
      {
        source: '/new-password',
        destination: 'https://dashboard.mediaweb.app/new-password',
        permanent: true,
      },
      // Dashboard pages (old /dashboard/* URLs)
      {
        source: '/dashboard',
        destination: 'https://dashboard.mediaweb.app/',
        permanent: true,
      },
      {
        source: '/dashboard/:path*',
        destination: 'https://dashboard.mediaweb.app/:path*',
        permanent: true,
      },
      // App pages
      {
        source: '/webpages/:path*',
        destination: 'https://dashboard.mediaweb.app/webpages/:path*',
        permanent: true,
      },
      {
        source: '/billing/:path*',
        destination: 'https://dashboard.mediaweb.app/billing/:path*',
        permanent: true,
      },
      {
        source: '/connections/:path*',
        destination: 'https://dashboard.mediaweb.app/connections/:path*',
        permanent: true,
      },
      {
        source: '/domains/:path*',
        destination: 'https://dashboard.mediaweb.app/domains/:path*',
        permanent: true,
      },
      {
        source: '/file-storage/:path*',
        destination: 'https://dashboard.mediaweb.app/file-storage/:path*',
        permanent: true,
      },
      {
        source: '/get-started/:path*',
        destination: 'https://dashboard.mediaweb.app/get-started/:path*',
        permanent: true,
      },
      {
        source: '/affiliate/:path*',
        destination: 'https://dashboard.mediaweb.app/affiliate/:path*',
        permanent: true,
      },
      // Editor
      {
        source: '/editor/:path*',
        destination: 'https://dashboard.mediaweb.app/editor/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
