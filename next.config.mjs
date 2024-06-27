/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'links.papareact.com',
            },

            {
                protocol: 'https',
                hostname: 'img.cleck.com',
            },
            {
                protocol: 'https',
                hostname: 'upconnect.blob.windows.net',
            },
            {
                protocol: 'https',
                hostname: 'upconnect.blob.windows.net',
            }
        ],
    },

};

export default nextConfig;
