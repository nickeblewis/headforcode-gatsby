// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "page-component---cache-dev-404-page-js": require("gatsby-module-loader?name=page-component---cache-dev-404-page-js!/Users/nicklewis/proj/headforcode-gatsby/.cache/dev-404-page.js"),
  "page-component---src-pages-contact-js": require("gatsby-module-loader?name=page-component---src-pages-contact-js!/Users/nicklewis/proj/headforcode-gatsby/src/pages/contact.js"),
  "page-component---src-pages-index-js": require("gatsby-module-loader?name=page-component---src-pages-index-js!/Users/nicklewis/proj/headforcode-gatsby/src/pages/index.js"),
  "page-component---src-pages-page-2-js": require("gatsby-module-loader?name=page-component---src-pages-page-2-js!/Users/nicklewis/proj/headforcode-gatsby/src/pages/page-2.js"),
  "page-component---src-pages-blog-index-js": require("gatsby-module-loader?name=page-component---src-pages-blog-index-js!/Users/nicklewis/proj/headforcode-gatsby/src/pages/blog/index.js")
}

exports.json = {
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/nicklewis/proj/headforcode-gatsby/.cache/json/dev-404-page.json"),
  "contact.json": require("gatsby-module-loader?name=path---contact!/Users/nicklewis/proj/headforcode-gatsby/.cache/json/contact.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/nicklewis/proj/headforcode-gatsby/.cache/json/index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/Users/nicklewis/proj/headforcode-gatsby/.cache/json/page-2.json"),
  "blog.json": require("gatsby-module-loader?name=path---blog!/Users/nicklewis/proj/headforcode-gatsby/.cache/json/blog.json")
}

exports.layouts = {
  "index": require("gatsby-module-loader?name=layout-component---index!/Users/nicklewis/proj/headforcode-gatsby/src/layouts/index")
}