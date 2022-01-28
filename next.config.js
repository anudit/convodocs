const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')
const runtimeCaching = require('next-pwa/cache')
const { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = require('next/constants')
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js"
});


const nextConfig = {
    poweredByHeader: false,
    reactStrictMode: true
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
            "source": "/docs/Convo-Extensions/(.*)",
            "destination": "/docs/ConvoX/(.*)",
            "statusCode": 301,
            "permanent": true
          }
        ]
      }
    }]
], nextConfig)
