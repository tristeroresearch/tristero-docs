import { createMDX } from 'fumadocs-mdx/next';
import inlineCSSModules from 'unplugin-inline-css-modules/next'

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  serverExternalPackages: ['@takumi-rs/image-response'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: config => {
    config.plugins = config.plugins || []
    config.plugins.push(inlineCSSModules())
    return config
  },
  turbopack: false,
  reactStrictMode: true,
};

export default withMDX(config);
