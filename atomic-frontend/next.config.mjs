/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      optimizePackageImports: ['@chakra-ui/react'],
   },
   images: {
      domains: ['s3.timeweb.cloud'],
   },
   distDir: 'build',
};

export default nextConfig;
