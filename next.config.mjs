/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: [
      "cdn.sanity.io",
      "images.unsplash.com",
      // ...
    ],
  },
}

export default config
