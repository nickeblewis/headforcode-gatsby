const siteUrl = process.env.NODE_ENV === 'production'
  ? 'http://headforcode.com'
  : 'http://localhost:8000';
const S3PATH = process.env.S3PATH;

const config = {
  siteMetadata: {
    title: 'HeadForCode.com',
    description: 'HeadForCode - Software Engineering & DevOps / South England, UK',
    site_url: siteUrl,
    link: siteUrl,
    author: 'nickeblewis'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      }
    },
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // {
          //   resolve: `gatsby-remark-responsive-image`,
          //   options: {
          //     maxWidth: 600
          //   }
          // },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-86079311-2`
      }
    }
    // `gatsby-plugin-offline` TODO: wait for https://github.com/gatsbyjs/gatsby/issues/1189
  ]
};

if (S3PATH && S3PATH !== 'latest') {
  config.pathPrefix = `/${S3PATH}`
}

module.exports = config;


// module.exports = {  
//   pathPrefix: '/',
//   siteMetadata: {
//     title: `HeadForCode`,
//     author: `Nick Lewis`
//   },
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     `gatsby-plugin-glamor`,
//     {
//       resolve: 'gatsby-source-filesystem',
//       options: {
//         name: 'pages',
//         path: `${__dirname}/src/pages/`,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-google-analytics`,
//       options: {
//         trackingId: `UA-86079311-2`,
//       },
//     },
//     {
//       resolve: 'gatsby-transformer-remark',
//       options: {
//         plugins: [          
//           // 'gatsby-remark-autolink-headers',
//           // {
//           //   resolve: 'gatsby-remark-responsive-iframe',
//           // },
//           'gatsby-remark-prismjs',
//           // `${__dirname}/syntax-highlighting/index.js`,
//           'gatsby-remark-copy-linked-files',
//           'gatsby-remark-smartypants',
//           // 'gatsby-plugin-catch-links',
//         ],
//       },
//     },
//   ],
// }