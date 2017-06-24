import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'

import '../css/main.css'

class Template extends React.Component {

  render() {
    const { location, children } = this.props
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        
        <nav className="overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative">

          { /* my comment here */ }
				    <a href="/" className="flex-none">
					    <img src={require('./logo.png')} alt="Farnborough Guide logo" className="br0 db mb0 w-100"/>
				    </a>
              <ul className="flex b grey-3">
                  <li>
                    <a href="/" className="pa3 no-underline db">Home</a>
                  </li>
                  <li>
                    <a href="/about/" className="pa3 no-underline db">About Us</a>
                  </li>
                  <li className="current">
                    <a href="/contact/" className="pa3 no-underline db">Contact</a>
                  </li>
              </ul>
          </nav>

          {children}

          <footer className="bg-black ph3 pv4 white">

	<div className="mw7 center pt3">

		<div className="measure-narrow center mb4">

			{/*<img src="/img/logo_hfc.png" alt="Kaldi logo" className="db w4 center mb4 br0" />*/}
			<p className="f3 lh-title light-gray b tc mb2">Newsletter subscribe</p>
			<p>Get awesome news from us in your inbox every two weeks. Be the first to learn about new products.</p>

			<form name="newsletter" className="flex-ns mb3" method="post"><input type="hidden" name="form-name" value="newsletter" />

  <fieldset className="flex-auto mb2 mb0-ns mr2-ns" name="newsletter" action="newsletter-subscribe">
    <input type="text" id="email" placeholder="Your email" name="email" className="w-100" />
    <label for="email">Your email</label>
  </fieldset>

  <button className="btn mb3 w-100 w-auto-ns mb0-ns raise" type="submit">Submit</button>

</form>


		</div>

		<div className="flex-ns justify-between">

			<div>
				<h3 className="f4 b lh-title mb1 primary">HeadForCode</h3>
				<ul className="mb3">
					<li><a href="/" className="link">Home</a></li>
					<li><a href="/products" className="link">Our Services</a></li>
					<li><a href="/values" className="link">About</a></li>
					<li><a href="/post" className="link">Blog</a></li>
					<li><a href="/contact" className="link">Contact</a></li>
				</ul>
			</div>

			<div>
				<h3 className="f4 b lh-title mb1 primary">Our other sites</h3>
				<ul className="mb3">
					<li><a href="http://www.nicklewis.net" className="link">Nick Lewis Blog</a></li>
				</ul>
			</div>

			<div>
				<h3 className="f4 b lh-title mb2 primary">Social media</h3>
				<ul className="mhn2">
					<li className="dib ph2 raise">
  <a href="http://facebook.com/headforcode" className="link bg-white black db relative br-100 pa2">
    {/*<svg width="16px" height="16px" className="db">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Facebook"></use>
    </svg>*/}
  </a>
</li>

					<li className="dib ph2 raise">
  <a href="http://twitter.com/headforcode" className="link bg-white black db relative br-100 pa2">
    {/*<svg width="16px" height="16px" className="db">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#twitter"></use>
    </svg>*/}
  </a>
</li>

					<li className="dib ph2 raise">
  <a href="https://vimeo.com/nicklewis" className="link bg-white black db relative br-100 pa2">
    {/*<svg width="16px" height="16px" className="db">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vimeo"></use>
    </svg>*/}
  </a>
</li>

				</ul>
			</div>

		</div>
	</div>

</footer>
        </div>
      
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template