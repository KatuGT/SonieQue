/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'nextui-docs-v2.vercel.app',
            },
          ],
      },
}

module.exports = nextConfig
