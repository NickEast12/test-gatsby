const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nick/Desktop/Web_Development/agency/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nick/Desktop/Web_Development/agency/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/nick/Desktop/Web_Development/agency/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nick/Desktop/Web_Development/agency/src/pages/index.js"))),
  "component---src-pages-testing-js": hot(preferDefault(require("/Users/nick/Desktop/Web_Development/agency/src/pages/testing.js")))
}

