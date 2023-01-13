
const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')
const runtimeCaching = require('next-pwa/cache')
const { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = require('next/constants')

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_stork: false,
  unstable_contentDump: true,
  unstable_staticImage: true,
  unstable_defaultShowCopyCode: true
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bafybeib5lto34gw74pcaa3woggtvltpt35hhselq6ijoctunyauroyyely.ipfs.w3s.link'],
  },
}

module.exports = withPlugins([
    [withPWA, {
      pwa: {
        dest: 'public',
        runtimeCaching
      },
    }, [PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER]],
    [withNextra, {
      redirects: () => {
        return [
          {
            "source": "/docs/Convo-API/trust-score",
            "destination": "/docs/Convo-API/omnid",
            "statusCode": 301,
            "permanent": true
          },
          {
            "source": "/docs/Convo-Extensions",
            "destination": "/docs/ConvoX",
            "statusCode": 301,
            "permanent": true
          },
          {
            "source": "/docs/Convo-Extensions/:path",
            "destination": "/docs/ConvoX/:path",
            "statusCode": 301,
            "permanent": true
          },
          {
            "source": "/integrate/:path",
            "destination": "/docs/:path",
            "statusCode": 301,
            "permanent": true
          }
        ]
      }
    }],
    [withBundleAnalyzer]
], nextConfig)
