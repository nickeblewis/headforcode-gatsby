import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
  propTypes = {
    body: React.PropTypes.string
  }

  
  render() {
    const { body } = this.props
    const head = Helmet.rewind()

    let css, ga;

    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!./public/styles.css'),
          }}
        />
      )
    }

    if ( process.env.NODE_ENV !== 'production' || config.buildSPA ) {
      // js =  <script src={ prefixLink(`/bundle.js?t=${BUILD_TIME}`) }/>;
    } else {
      ga = <script dangerouslySetInnerHTML={ {__html: require('!raw!./static/ga-snippet.js').replace('UA-XXXXX-Y', config.googleAnalyticsId)} }></script>;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          {css}
        </head>
        <body>
          <div
            id="react-mount"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          { ga }
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
          <script dangerouslySetInnerHTML={{__html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-83176608-1', 'auto');
            ga('send', 'pageview');`
          }}
        />
        </body>
      </html>
    )
  }
}
