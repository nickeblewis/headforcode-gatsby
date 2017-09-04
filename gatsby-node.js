const _ = require('lodash');
const path = require('path');
const fs = require('fs-extra');
const slugify = require('slugify');

const resourceTypePathMap = {
  posts: {
    path: '/blog',
    component: path.resolve('./src/templates/post.js')
  },
  pages: {
    component: path.resolve('./src/templates/page.js')
  }
};

const createTags = (tags) => {
  if (!tags) {
    return [];
  } else if (_.isArray(tags)) {
    return tags;
  }

  return tags.split(',').map(tag => tag.trim());
}

const ensureSlashes = slug => {
  if (slug.charAt(0) !== '/') {
    slug = '/' + slug;
  }

  if (slug.charAt(slug.length - 1) !== '/') {
    slug = slug + '/';
  }

  return slug.toLowerCase();
};

const parsePostFileName = fileNode => {
  return path.basename(
    fileNode.relativePath,
    path.extname(fileNode.relativePath)
  );
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

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
    );
  });
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against this Gatsbygram's graphql schema. Think of
    // it like Gatsbygram has a built-in database constructed
    // from static data that you can run queries against.
    //
    // Post is a data node type derived from data/posts.json
    // which is created when scrapping Instagram. “allPostsJson”
    // is a "connection" (a GraphQL convention for accessing
    // a list of nodes) gives us an easy way to query all
    // Post nodes.
    resolve(
      graphql(
        `
      {
        allPostsJson(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          reject(new Error(result.errors))
        }

        // Create image post pages.
        const postTemplate = path.resolve(`src/templates/post-page.js`)
        // We want to create a detailed page for each
        // Instagram post. Since the scrapped Instagram data
        // already includes an ID field, we just use that for
        // each page's path.
        _.each(result.data.allPostsJson.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${slug(edge.node.id)}/`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })

        return
      })
    )
  })
};

// Add custom slug for blog posts to both File and MarkdownRemark nodes.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  switch (node.internal.type) {
    case 'File':
      const parsedFilePath = path.parse(node.relativePath);
      const slug = `/${parsedFilePath.dir}/`;
      createNodeField({
        node,
        name: 'slug',
        value: slug
      });
      return;

    case 'MarkdownRemark':
      const fileNode = getNode(node.parent);
      let nodeSlug = ensureSlashes(
        _.get(node, 'frontmatter.path') ||
          slugify(
            _.get(node, 'frontmatter.title') || parsePostFileName(fileNode)
          )
      );

      if (
        nodeSlug &&
        resourceTypePathMap[fileNode.sourceInstanceName] &&
        resourceTypePathMap[fileNode.sourceInstanceName].path
      ) {
        nodeSlug =
          resourceTypePathMap[fileNode.sourceInstanceName].path + nodeSlug;
      }

      createNodeField({
        node,
        name: 'collection',
        value: fileNode.sourceInstanceName
      });

      if (nodeSlug) {
        createNodeField({ node, name: 'slug', value: nodeSlug });
      }
      return;
  }
};