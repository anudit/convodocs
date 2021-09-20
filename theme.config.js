import DocSearch from './components/DocSearch'
import Logo from './components/Logo'

export default {
  repository: 'https://github.com/anudit/convodocs',
  titleSuffix: ' – The Convo Space',
  logo: (
    <>
      <Logo height={32} classes="mt-1" />
      <span className="mx-2 mt-1 ml-2 mr-2 font-extrabold hidden md:inline">
        The Convo Space
      </span>
      <span className="text-gray-600 mt-1 font-normal hidden md:inline whitespace-no-wrap">
        Documentation
      </span>
   </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Convo : The Decentralized Conversation Space of Internet" />
      <meta name="og:description" content="Convo : The Decentralized Conversation Space of Internet" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.theconvo.space/poster.png" />
      <meta name="twitter:site:domain" content="docs.theconvo.space" />
      <meta name="twitter:url" content="https://docs.theconvo.space" />
      <meta name="og:title" content="Convo : The Decentralized Conversation Space of Internet" />
      <meta name="og:image" content="https://docs.theconvo.space/poster.png" />
      <meta name="apple-mobile-web-app-title" content="The Convo Space" />
      <link rel='manifest' href='/manifest.json' />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2.6.3/dist/cdn/docsearch.min.css" media="print" onLoad="this.media='all'" />
    </>
  ),
  search: true,
  customSearch: <DocSearch />,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  docsRepository: 'https://github.com/anudit/convodocs',
  branch: 'main',
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()} © The Convo Space.</>,
}
