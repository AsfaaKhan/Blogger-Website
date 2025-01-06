/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol : "https",
                hostname: "cdn.sanity",
                pathname:"/images/**"
            }
        ]
    }
};

export default nextConfig;
