/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {hostname:"images.unsplash.com"},
      {hostname:"static1.squarespace.com"}
    ]
  },
};

export default nextConfig;
