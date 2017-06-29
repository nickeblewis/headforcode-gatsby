import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from 'react-helmet'
import { config } from 'config'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { JumboTron, IntroBlock } from 'components'
// import IntroBlock from 'components/IntroBlock'

class Index extends React.Component {
  render() {
    return (
      <div className="ph3 bg-off-white">
	      <div className="center mw6 pv3">

		{/*<img src="/img/logo_hfc.png" alt="" className="db w4 center pv4" />*/}

		<p>We’d love to get in touch with you and hear your ideas and questions. We strive to grow and improve constantly and your feedback is valuable for us.</p>

		

		<div className="flex-ns mb3">

			<div>
				<h4 className="f4 b lh-title mb2 primary">Location</h4>
				<p>Ferneberga House, Alexandra Road, Farnborough GU14 6PQ</p>
			</div>

			<div>
				<h4 className="f4 b lh-title mb2 primary">Working hours</h4>
				<p>Monday – Friday: 9AM – 5PM We’re closed weekends</p>
			</div>

		</div>

		
<div className="mb4">
  <h4 className="f3 b lh-title mb3 tc">Drop us a line below</h4>

  <form name="contact-form" method="post" action="/thank-you/" netlify>
    <input type="hidden" name="form-name" value="contact-form" />
    <div className="flex-l mhn1-l">
          
      <div className="ph1-l w-50-l">
        <fieldset>
          <input type="text" id="name" placeholder="Name" className="w-100 mb2" name="name" />
          <label for="name">Name</label>
        </fieldset>
      </div>
          
      <div className="ph1-l w-50-l">
        <fieldset>
          <input type="email" id="email" placeholder="Email" className="w-100 mb2" name="email" />
          <label for="email">Email</label>
        </fieldset>
      </div>
    </div>

        
    <fieldset>
      <textarea placeholder="Your message" rows="8" cols="80" id="message" className="w-100" name="message"></textarea>
      <label for="message">Your message</label>
    </fieldset>
        
    <div className="tc">
      <button type="submit" className="btn w-100 w-auto-ns raise">Submit</button>
    </div>
  </form>
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