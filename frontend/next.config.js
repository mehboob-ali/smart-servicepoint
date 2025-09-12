/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable Strict Mode in development to avoid double-render/effects overhead
    reactStrictMode: false,
    swcMinify: true,
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        config.resolve.alias.encoding = false;
        return config;
    },
}

module.exports = nextConfig;
