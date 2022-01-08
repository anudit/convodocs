import "nextra-theme-docs/style.css";
// import { Prism } from "prism-react-renderer";

// (typeof global !== "undefined" ? global : window).Prism = Prism

// require("prismjs/components/prism-json")
// require("prismjs/components/prism-solidity")
// require("prismjs/components/prism-javascript")
// require("prismjs/components/prism-jsx")

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <style global>{`

        .docs-search > span {
          width: 100%;
        }
        .docs-search {
          max-width: 500px;
        }
        .docs-search input {
          padding-left: 35px;
        }
        .dark .docs-search input {
          border: 2px solid #4464bd77;
          background-color: #111;
        }

        .sidebar li.active>a {
          background-color: #4ba5ff21 !important;
        }

        .dark .sidebar li.active>a {
          background-color: #0083ff5c !important;
        }

        .dark .sidebar a:hover,
        .dark .sidebar button:hover {
          background-color: #0083ff1c !important;
        }

        .search-icon {
          position: absolute;
          left: 10px;
          top: 10px;
        }

        .search-slash {
          position: absolute;
          right: 10px;
          top: 6px;
          padding: 7px;
          background: #eef2f7;
          border-radius: 4px;
        }

        .dark .search-slash {
          background: #1e2d76;
        }

        .card {
          color:black;
          border-color: #80808029;
        }
        .card:hover {
          border-color:white;
        }

        .dark .card {
          color:white;
          border-color: #80808029;
        }
        .dark .card:hover {
          border-color:white;
        }

        .copied_hint {
          position: absolute;
          top: -2px;
          right: 30px;
        }

        a, code {
          line-break: anywhere !important;
        }

        @media (min-width: 768px){
          .md\:w-64 {
              width: 18rem !important;
          }
        }

        .docs-search > span {
          width: 100%;
        }

        .algolia-autocomplete .algolia-docsearch-suggestion--category-header span {
          display: inline-block;
        }
        .algolia-autocomplete .ds-dropdown-menu {
          width: 500px;
          min-width: 300px;
          max-width: calc(100vw - 50px);
        }

        /* Hack to make the TOC links look better by adjusting kerning */
        article > main + div a.font-semibold {
          font-weight: 500;
          letter-spacing: -0.01rem;
        }

        .dark .invert-on-dark {
          filter: invert(1) brightness(1.8);
        }

        .dark {
          --docsearch-text-color: rgb(245, 246, 247);
          --docsearch-container-background: rgba(9, 10, 17, 0.8);
          --docsearch-modal-background: rgb(21, 23, 42);
          --docsearch-modal-shadow: inset 1px 1px 0 0 rgb(44, 46, 64),
            0 3px 8px 0 rgb(0, 3, 9);
          --docsearch-searchbox-background: rgb(9, 10, 17);
          --docsearch-searchbox-focus-background: #000;
          --docsearch-hit-color: rgb(190, 195, 201);
          --docsearch-hit-shadow: none;
          --docsearch-hit-background: rgb(9, 10, 17);
          --docsearch-key-gradient: linear-gradient(
            -26.5deg,
            rgb(86, 88, 114) 0%,
            rgb(49, 53, 91) 100%
          );
          --docsearch-key-shadow: inset 0 -2px 0 0 rgb(40, 45, 85),
            inset 0 0 1px 1px rgb(81, 87, 125), 0 2px 2px 0 rgba(3, 4, 9, 0.3);
          --docsearch-footer-background: rgb(30, 33, 54);
          --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),
            0 -4px 8px 0 rgba(0, 0, 0, 0.2);
          --docsearch-logo-color: rgb(255, 255, 255);
          --docsearch-muted-color: rgb(127, 132, 151);
        }

        .react-tabs {
          -webkit-tap-highlight-color: transparent;
          margin-top: 20px;
          border-radius: 0.5rem;
          border-width: 1px;
          border-color: rgba(226, 232, 240);
          border-width: 1px;
        }
        .react-tabs__tab-list {
          padding: 0 20px 0 15px;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
          border-bottom: 1px solid rgba(226, 232, 240);
          margin: 0;
          min-width: 500px;
        }
        .react-tabs__tab {
          display: inline-block;
          border: 1px solid transparent;
          border-bottom: none;
          position: relative;
          list-style: none;
          cursor: pointer;
          padding: 10px;
          margin-top: 0;
        }
        .react-tabs__tab--selected {
          border-radius: 5px 5px 0 0;
          background-color: transparent;
          border-color: transparent;
          border-bottom: 4px solid #3dbff5 !important;
          top: 6px;
        }
        .react-tabs__tab--disabled {
          color: GrayText;
          cursor: default;
        }
        .react-tabs__tab:focus {
          box-shadow: 0 0 5px hsl(208, 99%, 50%);
          border-color: hsl(208, 99%, 50%);
          outline: none;
        }
        .react-tabs__tab:focus:after {
          content: '';
          position: absolute;
          height: 5px;
          left: -4px;
          right: -4px;
          bottom: -5px;
          background: #fff;
        }
        .react-tabs__tab-panel {
          display: none;
        }
        .react-tabs__tab-panel--selected {
          display: block;
          padding: 20px;
        }
        .react-tabs__tab .label-icon {
          height: 20px;
          width: 20px;
          margin-right: 15px;
          margin-top: 2px;
        }
        .react-tabs__tab .label-icon svg {
          height: 100%;
          margin: 0 auto;
        }
        .react-tabs__tab .label-text,
        .react-tabs__tab .label-icon {
          float:left;
        }
        .react-tabs__tab--selected .label-text,
        .react-tabs__tab--selected .label-icon {
          position: relative;
          top: -2px;
        }
        .tablist-wrapper {
          overflow-x: auto;
        }
        /* Dark */
        .dark .react-tabs {
          border-color: rgba(226, 232, 240, 0.5);
        }
        .dark .react-tabs__tab-list {
          border-bottom: 1px solid rgba(226, 232, 240, 0.5);
        }

        .copybutton {
          position: absolute;
          display: block;
          top: 10px;
          right: 10px;
          background-color: #e1e1e2;
          font-weight: 600;
          padding: 2px 10px;
          border-radius: 5px;
          font-size: 14px;
        }
        .dark .copybutton {
          background-color: #404959;
          color: #fff;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
