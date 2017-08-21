import React from "react"
import '../css/markdown-styles.css'
// import ReactDisqus from 'react-disqus'
import Helmet from "react-helmet"
import get from 'lodash/get'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="markdown mw6 center ph3 pv4">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1 className="f3 b lh-title mb1 primary">{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <ReactDisqus shortname="headforcode-1" /> */}
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostByPath($path: String!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  markdownRemark(frontmatter: { path: { eq: $path }}) {
    id
    html
    frontmatter {
      title
    }
  }
}
`
