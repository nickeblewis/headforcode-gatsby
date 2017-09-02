import React from "react"
// import '../css/markdown-styles.css'

// import ReactDisqus from 'react-disqus'
import Helmet from "react-helmet"
import get from 'lodash/get'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'
// import ReactDisqusThread from 'react-disqus-thread'
import Disqus from '../components/Disqus';
import ContentHeader from '../components/ContentHeader';
import Main from '../components/Main';
import cssStyles from '../css/prism.css';

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
        {/* <ReactDisqusThread
            shortname="headforcode-1"
            title={post.frontmatter.title} /> */}
            <Disqus
                shortname="headforcode-1"
        				title={post.frontmatter.title}
        				url={'http://www.headforcode.com' + post.frontmatter.path}
              />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostByPath($slug: String!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  markdownRemark(frontmatter: { slug: { eq: $slug }}) {
    id
    html
    frontmatter {
      title
    }
  }
}
`
