/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/aljaneena-cafe' : '';

const nextConfig = {
  output: 'export',

  // GitHub Pages project URL:
  // https://ma-abouzaeid.github.io/aljaneena-cafe/
  basePath,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;