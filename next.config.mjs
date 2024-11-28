/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                pathname: '/static/media/**',
            }
        ]
    }
};

export default nextConfig;
