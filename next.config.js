/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/maps/api/:path*',
        destination: 'https://maps.googleapis.com/maps/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
