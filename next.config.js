/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/img/wn/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/maps/api/:path*',
        destination: 'https://maps.googleapis.com/maps/api/:path*',
      },
      {
        source: '/mytravel/:path*',
        destination:
          'https://mytravel-b4618-default-rtdb.firebaseio.com/:path*',
      },
      {
        source: '/location:path*',
        destination: 'http://api.openweathermap.org/geo/1.0/direct:path*',
      },
      {
        source: '/forecast:path*',
        destination: 'http://api.openweathermap.org/data/2.5/forecast:path*',
      },
    ];
  },
};

module.exports = nextConfig;
