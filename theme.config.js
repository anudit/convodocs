import DocSearch from './components/DocSearch'
import Logo from './components/Logo'
import { useRouter } from 'next/router'

export default {
  project: {link: 'https://github.com/anudit/convo'},
  chat: {link: "https://discord.gg/MFtmrng9J7"},
  docsRepositoryBase: 'https://github.com/anudit/convodocs',
  // titleSuffix: " – Convo Space",
  // search: true,
  // unstable_flexsearch: true,
  search: {component: <DocSearch />},
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – Convo Space'
      }
    }
  },
  feedback: {
    labels: "feedback",
    link: "Question? Give us feedback →",
  },
  navigation: {
    prev: true,
    next: true,
  },
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/icon-white.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </>
    );
  },
  editLink: {
    text: () => {
      return "Edit this page on GitHub →";
    }
  },
  footer: {
    text:  `MIT ${new Date().getFullYear()} © CUPOC, Inc.`,
  },
  banner: {
    key: "isBannerOpen",
    text: () => {
      return (
      <>
        ✨ Learn more about <a href="https://blog.cupoc.space/" target="_blank"> Convo Space & Omnid →</a>
      </>);
    },
  },
  toc: {
    extraContent: <a href="https://cupoc.space/careers" target="_blank"><img src="/hiring.webp" width="150px"/></a>,
    float: true,
  },
};
