/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ar", "en", "fa"],
    defaultLocale: "fa",
  },
};

module.exports = nextConfig;
