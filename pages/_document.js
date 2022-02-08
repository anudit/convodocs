import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SkipNavLink } from '@reach/skip-nav'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://VT0SRL8DNS-dsn.algolia.net" crossOrigin="true" />
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
