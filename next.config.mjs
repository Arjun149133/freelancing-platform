import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = {
  //www.google.com image
  images: {
    domains: ["www.google.com"],
  },
};

export default withVideos(nextConfig);
