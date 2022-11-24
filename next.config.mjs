/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  images: {
    domains: [
      "via.placeholder.com",
      "gravatar.com",
      "images.microcms-assets.io",
    ],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
