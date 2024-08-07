/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
            },
            {
                source: '/settings',
                destination: '/settings/profile',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
