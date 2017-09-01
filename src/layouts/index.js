import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { rhythm } from "../utils/typography"

import NavHeader from '../components/NavHeader';
import ContentHeader from '../components/ContentHeader';
import Footer from '../components/Footer';

import '../css/main.css'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
         <nav className="overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative">
          <Link to="/" className="flex-none">
            <img src={require('./logo.png')} alt="Farnborough Guide logo" className="br0 db mb0 w-100"/>
          </Link>
          <ul className="flex b grey-3">
            <li>
              <Link to="/" className="pa3 no-underline db">Home</Link>
            </li>
            {/*<li>
              <Link to="/about/" className="pa3 no-underline db">About Us</Link>
            </li>*/}
            <li className="current">
              <Link to="/contact/" className="pa3 no-underline db">Contact</Link>
            </li>
          </ul>
        </nav>
          {this.props.children()}
         <footer className="bg-black ph3 pv4 white">

	      <div className="mw7 center pt3">

		      <div className="measure-narrow center mb4">

            {/*<img src="/img/logo_hfc.png" alt="Kaldi logo" className="db w4 center mb4 br0" />*/}
            <p className="f3 lh-title light-gray b tc mb2">Newsletter subscribe</p>
            {/*<p>Get awesome news from us in your inbox every two weeks. Be the first to learn about new products.</p>*/}

			      <form name="newsletter" className="flex-ns mb3" method="post">
              <input type="hidden" name="form-name" value="newsletter" />

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
                <li><Link to="/" className="link">Home</Link></li>
                {/*<li><Link to="/products" className="link">Our Services</Link></li>*/}
                {/*<li><Link to="/values" className="link">About</Link></li>*/}
                <li><Link to="/blog/" className="link">Blog</Link></li>
                <li><Link to="/contact/" className="link">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="f4 b lh-title mb1 primary">Our other sites</h3>
              <ul className="mb3">
                <li><Link to="http://www.nicklewis.net" className="link">Nick Lewis Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="f4 b lh-title mb2 primary">Social media</h3>
              <ul className="mhn2">
                <li className="dib ph2 raise">
                  <Link to="http://facebook.com/headforcode" className="link bg-white black db relative br-100 pa2">
                    <svg width="16px" height="16px" className="db">
                      <use href="#Facebook"></use>
                    </svg>
                  </Link>
                </li>

                <li className="dib ph2 raise">
                  <Link to="http://twitter.com/headforcode" className="link bg-white black db relative br-100 pa2">
                    <svg width="16px" height="16px" className="db">
                      <use href="#twitter"></use>
                    </svg>
                  </Link>
                </li>

                <li className="dib ph2 raise">
                  <Link to="https://vimeo.com/nicklewis" className="link bg-white black db relative br-100 pa2">
                    <svg width="16px" height="16px" className="db">
                      <use href="#vimeo"></use>
                    </svg>
                  </Link>
                </li>

				      </ul>
			      </div>

          </div>
        </div>

      </footer>
      {/*<div style="height: 0; width: 0; position: absolute; visibility: hidden">*/}
	
  <svg><symbol id="Facebook" viewBox="0 0 32 32"><path d="M30.7 0H1.3C.6 0 0 .6 0 1.3v29.3c0 .8.6 1.4 1.3 1.4H17V20h-4v-5h4v-4c0-4.1 2.6-6.2 6.3-6.2 1.8 0 3.3.2 3.7.2v4.3h-2.6c-2 0-2.5 1-2.5 2.4V15h5l-1 5h-4l.1 12h8.6c.7 0 1.3-.6 1.3-1.3V1.3C32 .6 31.4 0 30.7 0z"/></symbol><symbol id="instagram" viewBox="0 0 32 32"><path d="M28.2 0H3.8C1.7 0 0 1.7 0 3.8v24.4C0 30.3 1.7 32 3.8 32h24.4c2.1 0 3.8-1.7 3.8-3.8V3.8C32 1.7 30.3 0 28.2 0zM24 4h3c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm-8 5.9c3.4 0 6.2 2.7 6.2 6.1 0 3.4-2.8 6.1-6.2 6.1-3.4 0-6.2-2.7-6.2-6.1.1-3.4 2.8-6.1 6.2-6.1zM28 29H4c-.6 0-1-.4-1-1V13h4c-.5.8-.7 2.1-.7 3 0 5.4 4.4 9.7 9.7 9.7 5.4 0 9.7-4.4 9.7-9.7 0-.9-.1-2.3-.8-3h4v15c.1.6-.3 1-.9 1z"/></symbol><symbol id="twitter" viewBox="0 0 32 32"><path d="M32 6.1c-1.2.5-2.4.9-3.8 1 1.4-.8 2.4-2.1 2.9-3.6-1.3.8-2.7 1.3-4.2 1.6C25.7 3.8 24 3 22.2 3c-3.6 0-6.6 2.9-6.6 6.6 0 .5.1 1 .2 1.5-5.5-.3-10.3-2.9-13.6-6.9-.6 1-.9 2.1-.9 3.3 0 2.3 1.2 4.3 2.9 5.5-1.1 0-2.1-.3-3-.8v.1c0 3.2 2.3 5.8 5.3 6.4-.6.1-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.6 3.3 4.5 6.1 4.6-2.2 1.8-5.1 2.8-8.2 2.8-.5 0-1.1 0-1.6-.1 3 1.8 6.5 2.9 10.2 2.9 12.1 0 18.7-10 18.7-18.7v-.8c1.2-1 2.3-2.1 3.2-3.4z"/></symbol><symbol id="vimeo" viewBox="0 0 32 32"><path d="M32 8.6c-.1 3.1-2.3 7.4-6.5 12.8-4.4 5.7-8 8.5-11 8.5-1.9 0-3.4-1.7-4.7-5.2-.9-3.2-1.7-6.3-2.6-9.5-1-3.4-2-5.2-3.1-5.2-.2 0-1.1.5-2.5 1.5L0 9.6c1.6-1.4 3.1-2.8 4.7-4.2 2.1-1.8 3.7-2.8 4.7-2.9 2.5-.2 4 1.5 4.6 5.1.6 3.9 1.1 6.4 1.3 7.3.7 3.3 1.5 4.9 2.4 4.9.7 0 1.7-1.1 3-3.2s2.1-3.7 2.2-4.8c.2-1.8-.5-2.7-2.2-2.7-.8 0-1.6.2-2.4.5 1.6-5.2 4.6-7.7 9-7.5 3.3.2 4.9 2.3 4.7 6.5z"/></symbol></svg>
  
{/*</div>*/}

    </div>
      
    )
  }
}
