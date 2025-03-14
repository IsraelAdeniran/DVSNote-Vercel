/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: [
                {
                    loader: require.resolve("ignore-loader"),
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
