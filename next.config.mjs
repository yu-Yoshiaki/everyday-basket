/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  pageExtensions: ["page.tsx", "page.ts"],
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
};

export default nextConfig;
