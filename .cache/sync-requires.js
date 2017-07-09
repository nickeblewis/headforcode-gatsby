// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/nicklewis/proj/headforcode-gatsby/.cache/dev-404-page.js")),
  "page-component---src-pages-contact-js": preferDefault(require("/Users/nicklewis/proj/headforcode-gatsby/src/pages/contact.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/nicklewis/proj/headforcode-gatsby/src/pages/index.js")),
  "page-component---src-pages-page-2-js": preferDefault(require("/Users/nicklewis/proj/headforcode-gatsby/src/pages/page-2.js")),
  "page-component---src-pages-blog-index-js": preferDefault(require("/Users/nicklewis/proj/headforcode-gatsby/src/pages/blog/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/nicklewis/proj/headforcode-gatsby/.cache/json/dev-404-page.json"),
  "contact.json": require("/Users/nicklewis/proj/headforcode-gatsby/.cache/json/contact.json"),
  "index.json": require("/Users/nicklewis/proj/headforcode-gatsby/.cache/json/index.json"),
  "page-2.json": require("/Users/nicklewis/proj/headforcode-gatsby/.cache/json/page-2.json"),
  "blog.json": require("/Users/nicklewis/proj/headforcode-gatsby/.cache/json/blog.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/nicklewis/proj/headforcode-gatsby/src/layouts/index"))
}