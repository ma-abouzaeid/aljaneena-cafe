/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // GitHub Pages project URL:
  // https://ma-abouzaeid.github.io/aljaneena-cafe/
  basePath:
    process.env.NODE_ENV === 'production'
      ? '/aljaneena-cafe'
      : '',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;