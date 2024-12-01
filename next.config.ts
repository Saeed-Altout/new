import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  images: {
    domains: [
      "e-inakademie.free-homes.de",
      "https://e-inakademie.free-homes.de",
      "http://e-inakademie.free-homes.de",
    ],
  },
};
export default withNextIntl(nextConfig);
