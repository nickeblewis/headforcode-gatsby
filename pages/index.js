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
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index