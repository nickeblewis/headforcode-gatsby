import React from 'react'

// We import the image file
import imageUrl from './iStock-496652404.jpg'

class IntroBlock extends React.Component {
  render() {
      return (
    <div className="bg-off-white pv4">
  <div className="ph3 mw7 center">
    <h2 className="f2 b lh-title mb2"></h2>
    <p className="mb4 mw6"></p>

    <div className="flex-ns mhn2-ns mb3">
      <div className="ph2-ns w-50-ns">
        {/*<img src={require("./iStock-505021766.jpg")} alt="" className="center db mb3"  />*/}
        <h4 className="f4 b tc lh-title mb2 primary">Research</h4>
        <p>One aspect of being a developer, is that you, though you may not realise it, are a Researcher. We spend a lot of our time exploring ways of solving problems. So much so, that at times one thing leads to another and keeping track of where you are in the grand scheme of things is hard. We want to help solve this problem.</p>
      </div>

      <div className="ph2-ns w-50-ns">
        {/*<img src={require("./iStock-505642128.jpg")} alt="" className="center db mb3"  />*/}
        <h4 className="f4 b tc lh-title mb2 primary">Mentoring</h4>
        <p>We are working more frequently with other Developers, ranging from apprentices, through to highly experienced professionals. Most of these people face the same daily challenges as we do. Mentoring is a great way of helping people learn based on our own knowledge and experiences. In return we often learn quite a lot from the people we teach.</p>
      </div>
    </div>
<div className="tc">
        <a href="/services" className="btn raise">See all services</a>
      </div>
    
      
    
  </div>
</div>
    )}
}

// you only have one export because this indicates that this component 
// is designed for use within other components

IntroBlock.propTypes = {
    topline: React.PropTypes.string,
    secondline: React.PropTypes.string,
}
export default IntroBlock