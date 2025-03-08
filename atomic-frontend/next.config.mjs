/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      optimizePackageImports: ['@chakra-ui/react'],
   },
   distDir: 'build',
};

export default nextConfig;
