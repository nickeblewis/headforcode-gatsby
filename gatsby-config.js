module.exports = {  
  siteMetadata: {
    title: `HeadForCode`,
    author: `Nick Lewis`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glamor`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [          
          'gatsby-remark-autolink-headers',
          // {
          //   resolve: 'gatsby-remark-responsive-iframe',
          // },
          // 'gatsby-remark-prismjs',
          // `${__dirname}/syntax-highlighting/index.js`,
          'gatsby-remark-copy-linked-files',
          // 'gatsby-remark-smartypants',
          'gatsby-plugin-catch-links',
        ],
      },
    },
  ],
}