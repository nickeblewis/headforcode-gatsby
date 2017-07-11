import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { JumboTron, IntroBlock } from '../components'
// import IntroBlock from 'components/IntroBlock'

class Index extends React.Component {
  render() {
    
    return (
      <div>
        <JumboTron topline="Developing web apps since 2010" secondline="We can help build yours..." />
        <IntroBlock />

        <div className="bg-off-white pv4">
	        <div className="ph3 mw7 center">
		        {/*<h2 className="f2 b lh-title mb3">Fresh from the blog</h2>*/}
		        <div className="w-100 flex-ns mhn1-ns flex-wrap mb3">
				      
				      
             
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