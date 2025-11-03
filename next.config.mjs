/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    { source: '/home', destination: '/', permanent: true }
  ],
  rewrites: async () => [{ source: '/', destination: '/home' }]
};

export default nextConfig;
