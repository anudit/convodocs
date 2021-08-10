const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')
const runtimeCaching = require('next-pwa/cache')
const { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } = require('next/constants')

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
});

const nextConfig = {
    target: "experimental-serverless-trace",
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
    [withNextra]
], nextConfig)
