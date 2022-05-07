import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SkipNavLink } from '@reach/skip-nav'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://VT0SRL8DNS-dsn.algolia.net" crossOrigin="true" />
          <link rel="preconnect" href="https://theconvo.space/" crossOrigin="true" />
          <link rel="preconnect" href="https://backup.theconvo.space/" crossOrigin="true" />
          <link rel="preconnect" href="https://node1.theconvo.space/" crossOrigin="true" />
          <link rel="preconnect" href="https://node2.theconvo.space/" crossOrigin="true" />
          <link rel="preconnect" href="https://node3.theconvo.space/" crossOrigin="true" />
          <link rel="preconnect" href="https://node4.theconvo.space/" crossOrigin="true" />
        </Head>
        <body>
          <SkipNavLink />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
