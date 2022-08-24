import DocSearch from './components/DocSearch'
import Logo from './components/Logo'

export default {
  projectLink: 'https://github.com/anudit/convo',
  projectChatLink: "https://discord.gg/MFtmrng9J7",
  docsRepositoryBase: 'https://github.com/anudit/convodocs',
  titleSuffix: " – Convo Space",
  search: true,
  customSearch: <DocSearch />,
  // unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => {
    return ("Question? Give us feedback →");
  },
  feedbackLabels: "feedback",
  prevLinks: true,
  nextLinks: true,
  logo: () => {
    return (
      <>
        <Logo height={32} classes="mt-1 invert-on-dark" />
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title="Convo Space"
          style={{width: "max-content"}}
        >
          Convo Space
        </span>
      </>
    );
  },
  head: (meta) => {
    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={Boolean(meta?.title) === true ? meta?.title + " - Convo Space" : "Convo Space : The Decentralized Conversation Space of Internet"} />
        <meta name="og:description" content={meta?.description || "Convo Space : The Decentralized Conversation Space of Internet"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={Boolean(meta?.image) === true  || "https://docs.theconvo.space/poster.png"} />
        <meta name="twitter:site:domain" content="docs.theconvo.space" />
        <meta name="twitter:url" content="https://docs.theconvo.space" />
        <meta name="og:title" content={meta?.title ? meta?.title + " - Convo Space" : "Convo Space : The Decentralized Conversation Space of Internet"} />
        <meta name="og:image" content={Boolean(meta?.image) === true  || "https://docs.theconvo.space/poster.png"} />
        <meta name="apple-mobile-web-app-title" content="Convo Space" />
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
      </>
    );
  },
  footerEditLink: () => {
    return "Edit this page on GitHub →";
  },
  footerText:  `MIT ${new Date().getFullYear()} © CUPOC, Inc.`,
  bannerKey: "isBannerOpen",
  banner: () => {
    return (
    <>
      ✨ Learn more about <a href="https://blog.cupoc.space/" target="_blank"> Convo Space & Omnid →</a>
    </>);
  },
  tocExtraContent: () => {
    return <a href="https://cupoc.space/careers" target="_blank"><img src="/hiring.webp" width="150px"/></a>;
  },
};
