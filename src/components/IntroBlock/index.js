import React from 'react'

// We import the image file
import imageUrl from './iStock-496652404.jpg'

class IntroBlock extends React.Component {
  render() {
      return (
    <div className="bg-off-white pv4">
  <div className="ph3 mw7 center">
    <div className="flex-ns mhn2-ns mb3">
      <div className="center mw6 pv3">
          {/*<img src={require("./iStock-505642128.jpg")} alt="" className="center db mb3"  />*/}
          <h1 className="f4 b tc lh-title mb2 primary">Welcome to a world of code!</h1>
          <p className="f5 tc">Our aim is to help people with their code, either to build bespoke projects for clients or to teach developers of various levels the skills we know.</p>
        </div>
    </div>
    <div className="flex-ns mhn2-ns mb3">
      <div className="ph2-ns w-50-ns">
        {/*<img src={require("./iStock-505021766.jpg")} alt="" className="center db mb3"  />*/}
        <h4 className="f5 b tc lh-title mb2 primary">Solutions</h4>
        <p className="f6 normal">We haven't turned our backs on back-ends at all, we just use them in a different way nowadays. We have a wealth of experience in working with GraphCool, Serverless, StdLib and anything that can be coded with a little bit of NodeJS. Part of the JAMStack approach is that you can pull data from an API in order to generate your static content, deploy that to a CDN and your customers get to experience lightning fast websites.</p>
      </div>      
      <div className="ph2-ns w-50-ns">
        {/*<img src={require("./iStock-505021766.jpg")} alt="" className="center db mb3"  />*/}
        <h4 className="f5 b tc lh-title mb2 primary">Learn</h4>
        <p className="f6 normal">We haven't turned our backs on back-ends at all, we just use them in a different way nowadays. We have a wealth of experience in working with GraphCool, Serverless, StdLib and anything that can be coded with a little bit of NodeJS. Part of the JAMStack approach is that you can pull data from an API in order to generate your static content, deploy that to a CDN and your customers get to experience lightning fast websites.</p>
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