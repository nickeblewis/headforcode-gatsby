import React from 'react'
import PropTypes from 'prop-types'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'
import ReactDisqusThread from 'react-disqus-thread'

// import '../css/zenburn.css'

class Markdown extends React.Component {

  render() {
    const { route } = this.props
    const post = this.props.route.page.data
    return (
      <div className="markdown mw6 center ph3 pv4">
        <Helmet title={`${config.siteTitle} | ${post.title}`} />
        <h2 className="f3 b lh-title mb1 primary">{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <ReactDisqusThread
				shortname="headforcode-1"
				identifier="something-unique-12345"
				title="HeadForCode"
				url="http://www.example.com/example-thread"
				category_id="123456"
				onNewComment={this.handleNewComment}/>
      </div>
    )
  }
}

Markdown.propTypes = {
  route: React.PropTypes.object,
}

export default Markdown