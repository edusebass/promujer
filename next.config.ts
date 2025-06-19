import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.lanacion.com.ar",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "st4.depositphotos.com",
      },
      {
        protocol: "https",
        hostname: "st.depositphotos.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "tecdn.b-cdn.net",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
      },
      {
        protocol: "https",
        hostname: "www.stop-pe.org",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },

    ],
  },
};

export default nextConfig;