if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>n(e,o),r={module:{uri:o},exports:c,require:t};s[o]=Promise.all(i.map((e=>r[e]||t(e)))).then((e=>(a(...e),c)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Convo.yaml",revision:"01de642cc3568c86f500151010bfa0b8"},{url:"/ConvoxDecentraland.mp4",revision:"688a7c5603e79fbb0d3ff60aacb24c75"},{url:"/Telegram-Convo.mp4",revision:"d5b90c625938f6d14cab49c161094171"},{url:"/_next/server/middleware-manifest.json",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/511-b32cf7bbaa7f09ff.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/723-e2908e9a7bd6c673.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/main-f3f60c09bd7f3ddf.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/_app-fe4c8d961a2cf32e.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-API/api-docs-5bab55ba8cf1dff8.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-API/omnid-83646f672ca65023.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-API/standards-06f628927ceb3ce5.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-API/websocket-c7e4db666e90f2c9.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-Bridge/bridge-6e93930b83ee6541.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-Embeds/dynamic-embeddable-convo-0c09b2caa311b3ee.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-Embeds/embed-a-comment-b77e9ed1dc4d661d.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-Extensions/brightid-a929cb43a5e9ca39.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-Extensions/browser-extension-98805bba416fd50f.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-Extensions/convo-on-decentraland-baeebbde07d5944d.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/auth-715b23388ea5fbc3.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/comments-ac6b61625f296d6a.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/identity-566089981c0e0603.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/installation-df3181547cade547.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/threads-c34aa88124cda5c1.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/docs/Convo-SDK/utils-989f7ae7e026859f.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/examples/browser-157274d44e95f27f.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/examples/decentraland-fe23a8e85910d45c.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/examples/nextjs-d6d51cc29efb7ca8.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/index-14f75ef9f47fb9fa.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/learn/conviction-voting-f1b2ed6d63418f6e.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/pages/learn/read-about-convo-ba33bcdd65d47cef.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/chunks/webpack-2b99834efceef160.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/css/6c0e2b6ee025e6a3.css",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/l94Lv-OJHfoHzy35ZBOQp/_buildManifest.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/l94Lv-OJHfoHzy35ZBOQp/_middlewareManifest.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/_next/static/l94Lv-OJHfoHzy35ZBOQp/_ssgManifest.js",revision:"l94Lv-OJHfoHzy35ZBOQp"},{url:"/android-icon-192x192.png",revision:"5cefa2531350cd9433a746a5e697366d"},{url:"/apple-icon-180x180.png",revision:"f614488962f62a02d2ec06418ac970bb"},{url:"/apple-icon.png",revision:"e8b7fa13ab70841568fcd15d4132efff"},{url:"/conviction-voting.jpeg",revision:"8fd3f7df42e2fdc9b018168782a4d3fa"},{url:"/css@alpha.css",revision:"1d438cee03b59e2bd1016f209556c35e"},{url:"/dark.png",revision:"e8b7fa13ab70841568fcd15d4132efff"},{url:"/favicon-16x16.png",revision:"2adc41bb2862f4e0c23c3a4040c64987"},{url:"/favicon-32x32.png",revision:"fff8b9ad53c697fe7872224ff56fa9e6"},{url:"/favicon-96x96.png",revision:"b7182cb4b1f9d7c32985ee73916f439b"},{url:"/favicon.ico",revision:"f95458920f3a8709e671c49e8eb2f975"},{url:"/flow.png",revision:"c8f29a57187c250bf5d1f2d25a09ca17"},{url:"/index-en-US.st",revision:"030bab89c96f3843058c9b02821ef784"},{url:"/index-en-US.toml",revision:"7e8aceab4681c31de391cfd2f66178b0"},{url:"/manifest.json",revision:"49e7e15f71032dd6f29a975de7e292e0"},{url:"/ms-icon-144x144.png",revision:"0062837a3ca3058c0b14a45570df912c"},{url:"/poster.png",revision:"58532a2a416b021788f8c608bdb42ff9"},{url:"/stork.wasm",revision:"e4e84b2b2e9d3244409a7db6a41a6cca"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
