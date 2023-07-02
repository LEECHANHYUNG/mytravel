/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_KEY: 'AIzaSyCPVfAkQF3RBuVPy6jnOKJKTeHUtG - NfoA',
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
    ];
  },
};

module.exports = nextConfig;
