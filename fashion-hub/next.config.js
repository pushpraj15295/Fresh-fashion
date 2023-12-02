/** @type {import('next').NextConfig} */

module.exports = {
    async headers() {
      return [
        {
          source: '/app/api/:path*',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: '*' },
            // Other headers...
          ],
        },
      ];
    },
  };
