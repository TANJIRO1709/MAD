/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {hostname:"unsplash.com"},
      {hostname:"static1.squarespace.com"}
    ]
  },
};

export default nextConfig;
