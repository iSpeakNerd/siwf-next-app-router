/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/players',
        destination: process.env.SPREADSHEET_URL, // inject URL from vercel
        permanent: true,
      },
      {
        source: '/channel',
        destination: 'https://warpcast.com/~/channel/tabletop', // warpcast channel URL
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://paragraph.xyz/@ispeaknerd.eth/category/tabletop', // paragraph blog URL
        permanent: true,
      },
      {
        source: '/community-stats',
        destination: process.env.PUBLIC_STATS_URL, // inject URL from vercel
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
