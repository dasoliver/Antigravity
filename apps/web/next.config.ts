import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@antigravity/core", "@antigravity/db", "@antigravity/ai"],
};

export default nextConfig;
