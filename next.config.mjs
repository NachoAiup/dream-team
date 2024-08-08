/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apiv3.apifootball.com",
        port: "",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
