---
title: Help from our Gatsby friends
date: "2017-09-05"
layout: post
author: nickeblewis
tags:    
    - Gatsby
    - Code
    - Problem Solving
thumbnail: 'https://s3-eu-west-1.amazonaws.com/assets.site.headforcode.com/icons/js.png'
draft: false
---

## Can you help?

This is a little bit of a shout out to other developers out there who work with GatsbyJS. The question I have relates to gatsby-node.js and the createPages method.

``` javascript
return new Promise((resolve, reject) => {
    const pages = [];
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
                collection
              },
              frontmatter {
                title,
                tags
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.error('[BUILD ERROR]', result.errors);
          return reject(result.errors);
        }

        const nodes = result.data.allMarkdownRemark.edges.map(e => e.node);

        // Create blog posts pages.
        _.each(nodes, node => {
          createPage({
            path: node.fields.slug, // required
            component:
              resourceTypePathMap[node.fields.collection].component,
            context: {
              slug: node.fields.slug,
              collection: node.fields.collection
            }
          });
        });

        // create tag pages
        const tags = _.uniq(_.flatMap(nodes, n => createTags(n.frontmatter.tags)));

        _.each(tags, tag => {
          const tagPath = slugify(tag);
          createPage({
            path: `/blog/tags/${tagPath}/`, // required
            component: path.resolve('./src/templates/tags.js'),
            context: {
              tag
            }
          });
        });
        // create pagination
      })
    )
  });
};
```

I would very much love to add to this site a Gatsbygram and if you are a Gatsby user, you'll have come across this in your examples folder. So my question is can I have two calls to ```createPages``` in my code? Or do I need to merge the GraphQL code into one?

Please feel free to use Disqus below to have a chat about this? Thanks!!