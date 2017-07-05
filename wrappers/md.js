/**
 * Ideas for FrontMatter
 * - Tags and categories
 * - Type - blog/post, article, doc, project, example, tutorial as these later may have unique templates of their own?
 * - repo - the github repository split by branch for each step, useful for tutorials
 * - date - currently anything with a date gets listed on the homepage
 */

import React from 'react'
import PropTypes from 'prop-types'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'
import ReactDisqus from 'react-disqus'

import '../css/styles.css'

class Markdown extends React.Component {
  render() {
    const { route } = this.props
    const post = this.props.route.page.data
    return (
      <div className="markdown mw6 center ph3 pv4">
        <Helmet title={`${config.siteTitle} | ${post.title}`} />
        <h2 className="f3 b lh-title mb1 primary">{post.title}</h2>
        { /* TODO: I want to show the author title here and a link to the GitHub repo the article may relate to */ }
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <ReactDisqus shortname="headforcode-1" />
      </div>
    )
  }
}

Markdown.propTypes = {
  route: React.PropTypes.object,
}

export default Markdown