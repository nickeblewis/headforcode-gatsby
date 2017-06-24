import React from 'react'
import PropTypes from 'prop-types'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'

class Markdown extends React.Component {

  render() {
    const { route } = this.props
    const post = this.props.route.page.data
    return (
      <div className="markdown">
        <Helmet title={`${config.siteTitle} | ${post.title}`} />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
}

Markdown.propTypes = {
  route: React.PropTypes.object,
}

export default Markdown