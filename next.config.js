/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kingdta.com",
      },
    ],
  },
  // 静态资源长期缓存，减轻重复请求与网络链（LCP/Network 优化）
  async headers() {
    return [
      {
        source: "/blog-pic/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/radar/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog/wt4104b-c01-blind-spot-detection-radar-ebike-safety",
        destination: "/blog/bd4104b-c01-blind-spot-detection-radar-ebike-safety",
        permanent: true,
      },
    ];
  },
};

export default config;
