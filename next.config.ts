import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "videos.openai.com",
                pathname: "/vg/**",
            },
        ],
    },
};

export default nextConfig;
