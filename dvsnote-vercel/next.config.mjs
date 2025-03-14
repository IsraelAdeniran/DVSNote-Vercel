/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true,
    },
    webpack(config) {
        return config;
    },
};

export default nextConfig;
