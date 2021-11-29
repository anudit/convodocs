import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SkipNavLink } from '@reach/skip-nav'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://VT0SRL8DNS-dsn.algolia.net" crossOrigin="true" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@alpha"  global="true"/>
        </Head>
        <body>
          <SkipNavLink />
          <Main />
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/@docsearch/js@alpha"
            async
            defer
          />

        </body>
      </Html>
    )
  }
}

export default MyDocument
