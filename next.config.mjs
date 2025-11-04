import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

const packageJsonPath = resolve(process.cwd(), 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_VERSION: packageJson.version
  },
  reactStrictMode: true,
  redirects: async () => [
    { source: '/home', destination: '/', permanent: true }
  ],
  rewrites: async () => [{ source: '/', destination: '/home' }]
};

export default nextConfig;
