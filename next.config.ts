import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for static site generation (SSG) on GitHub Pages
  output: "export",

  // Next.js default image optimization is not supported on static hosts
  images: {
    unoptimized: true,
  },

  // If you are deploying to https://<username>.github.io/<repository-name>,
  // uncomment the line below and replace 'portfolio' with your repository name.
  // basePath: "/portfolio",
};

export default nextConfig;
