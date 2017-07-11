import React from "react"
import '../css/markdown-styles.css'
import ReactDisqus from 'react-disqus'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <div className="markdown mw6 center ph3 pv4">
        <h2 className="f3 b lh-title mb1 primary">{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ReactDisqus shortname="headforcode-1" />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug }}) {
    html
    frontmatter {
      title
    }
  }
}
`
