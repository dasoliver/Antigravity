import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@antigravity/db', '@antigravity/core', '@antigravity/ai'],
}

export default nextConfig
