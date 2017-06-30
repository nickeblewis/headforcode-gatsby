import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from 'react-helmet'
import { config } from 'config'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import include from 'underscore.string/include'
import { JumboTron, IntroBlock } from 'components'
// import IntroBlock from 'components/IntroBlock'

class Index extends React.Component {
  render() {
    // Sort pages.
      console.log(this.props)
    const sortedPages = sortBy(this.props.route.pages, 'data.date')
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && !include(page.path, '/404') && get(page, 'data.type' === 'post' ) || get(page, 'data.date')
    ))
    return (
      <div>
        <JumboTron topline="Developing web apps since 2002" secondline="We can help build yours..." />
        <IntroBlock />

        <div className="bg-off-white pv4">
	        <div className="ph3 mw7 center">
		        <h2 className="f2 b lh-title mb3">Fresh from the blog</h2>
		        <div className="w-100 flex-ns mhn1-ns flex-wrap mb3">
				      
				      
              {visiblePages.slice(0,4).map((page) => (
              
              <div key={page.path} className="ph1-ns w-50-ns flex">
                <Link to={prefixLink(page.path)} className="no-underline pa3 bg-grey-1 br1 mb2 db raise w-100">
                  <h2 className="f3 b lh-title mb1 primary">{get(page, 'data.title', page.path)}</h2>
                  {/*<p className="mid-gray lh-title mb2">Wed, Apr 19, 2017</p>*/}
                  <p className="mb0">{get(page, 'data.description', page.path)}</p>
                  <p className="link b dib black mb0">Read more →</p>
                </Link>
              </div> 
            ))}
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