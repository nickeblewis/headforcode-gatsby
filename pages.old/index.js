import React from 'react'
import { Link } from 'gatsby-link'
import Helmet from 'react-helmet'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { JumboTron, IntroBlock } from '../components'
// import IntroBlock from 'components/IntroBlock'
import { rhythm } from '../utils/typography'

class Index extends React.Component {
  render() {
    const pageLinks = []
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    posts.forEach(post => {
      if (post.node.path !== '/404/') {
        const title = get(post, 'node.frontmatter.title') || post.node.frontmatter.path
        pageLinks.push(
          // <div key={post.node.frontmatter.path} className="fl-m fl-l w-25-m w-25-l">
          //       <div className="pa4 pa4-m">
          //         <a style={{boxShadow: 'none'}} href={post.node.frontmatter.path}>
          //           <img src="http://placehold.it/200" alt={post.node.frontmatter.title} />
          //         </a>              
          //       </div>
          //       <div className="tc">
          //     <a href={post.node.frontmatter.path} className="btn raise">Read more</a>
          //   </div>
          // </div>                        
          <div className="ph1-ns w-50-ns flex">
            <a className="no-underline pa3 bg-grey-1 br1 mb2 db raise w-100" href={post.node.frontmatter.path}>
              <h2 className="f3 b lh-title mb1 primary">{post.node.frontmatter.title}</h2>
              <p className="mb0">{post.node.frontmatter.description}</p>
              <p className="link b dib black mb0">Read more →</p>
            </a>
          </div>
        )
      }
    })
    
    return (
      <div>
        <JumboTron topline="Developing web apps since 2010" secondline="We can help build yours..." />
        <IntroBlock />

        <div className="bg-off-white pv4">
	        <div className="ph3 mw7 center">
		        {/*<h2 className="f2 b lh-title mb3">Fresh from the blog</h2>*/}
		        <div className="w-100 flex-ns mhn1-ns flex-wrap mb3">
				      
				      
              {pageLinks}
             
             
            </div>
           
{/*<div key={page.path} className="fl-m fl-l w-25-m w-25-l">
                <div className="pa4 pa4-m">
                    <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}>
                    <img src={ prefixLink(page.path) + get(page, 'data.image', page.path)} alt="carbon-trust.jpg" />
                </Link>
             
                </div>
            </div>*/}
            {/*<div className="tc">
              <Link to="/blog/" className="btn raise">Read more</Link>
            </div>*/}

          </div>
        </div>

        
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {layout: {eq: "Post"}}} limit: 5, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            path
            title
            thumbnail
            description
          }
        }
      }
    }
  }
`