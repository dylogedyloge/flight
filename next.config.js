/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ar", "en", "fa"],
    defaultLocale: "fa",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newcash.me",
        port: "",
        pathname: "/flights_logos/**",
      },
    ],
  },
};

module.exports = nextConfig;
