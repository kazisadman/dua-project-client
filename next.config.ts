import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images:{
    unoptimized:true,
    remotePatterns:[
      {
        protocol:"https",
        hostname:"i.ibb.co.com",
        pathname:"/**"
      }
    ]
  }
};

export default nextConfig;
