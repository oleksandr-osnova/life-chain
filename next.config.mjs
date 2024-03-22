/** @type {import('next').NextConfig} */
const nextConfig = {
    ...(process.env.NODE_ENV === 'production' && { basePath: '/life-chain' }),
    output: 'export',
    reactStrictMode: true,
};

export default nextConfig;
