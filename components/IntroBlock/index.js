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
        <h4 className="f4 b tc lh-title mb2 primary">Contracting</h4>
        <p>I have been contracting since 2002 and have worked for numerous companies and projects over the years. You are more than welcome to request a copy of my CV via the contact page. I am currently not on the lookout, as I am busy working with PCL just outside of Leatherhead, in Surrey. I am always happy to network with people via LinkedIn in the meanwhile.</p>
      </div>

      <div className="ph2-ns w-50-ns">
        {/*<img src={require("./iStock-505642128.jpg")} alt="" className="center db mb3"  />*/}
        <h4 className="f4 b tc lh-title mb2 primary">Software House</h4>
        <p>HeadForCode is a trading name for Nick Lewis Ltd our registered company. We are working more frequently with other Developers, ranging from apprentices, through to highly experienced professionals. We are currently looking for exciting new ways to develop the next generation of products on the web and mobile platforms.</p>
      </div>
    </div>
    {/*<div className="tc">
        <a href="/services" className="btn raise">See all services</a>
      </div>
    */}
      
    
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