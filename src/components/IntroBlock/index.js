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
      <div className="center mw6 pv3">
          {/*<img src={require("./iStock-505642128.jpg")} alt="" className="center db mb3"  />*/}
          <h4 className="f4 b tc lh-title mb2 primary">Introducing the JAMStack</h4>
          <p className="tc">We abandoned Wordpress and Drupal some time ago after we realised it is possible to build for the web using a combination of technologies that aren't reliant on database back-ends or the dreaded security patches. Above all else we can fully embrace the technologies we love to work with, JavasCript, HTML & CSS - pure frontend code.</p>
        </div>
    </div>
    <div className="flex-ns mhn2-ns mb3">
      <div className="ph2-ns w-33-ns">
        {/*<img src={require("./iStock-505642128.jpg")} alt="" className="center db mb3"  />*/}
        <h4 className="f4 b tc lh-title mb2 primary">JavaScript</h4>
        <p>We abandoned Wordpress and Drupal some time ago after we realised it is possible to build for the web using a combination of technologies that aren't reliant on database back-ends or the dreaded security patches. Above all else we can fully embrace the technologies we love to work with, JavasCript, HTML & CSS - pure frontend code.</p>
      </div>
      <div className="ph2-ns w-33-ns">
        {/*<img src={require("./iStock-505021766.jpg")} alt="" className="center db mb3"  />*/}
        <h4 className="f4 b tc lh-title mb2 primary">APIs</h4>
        <p>We haven't turned our backs on back-ends at all, we just use them in a different way nowadays. We have a wealth of experience in working with GraphCool, Serverless, StdLib and anything that can be coded with a little bit of NodeJS. Part of the JAMStack approach is that you can pull data from an API in order to generate your static content, deploy that to a CDN and your customers get to experience lightning fast websites.</p>
      </div>      
      <div className="ph2-ns w-33-ns">
        {/*<img src={require("./iStock-505021766.jpg")} alt="" className="center db mb3"  />*/}
        <h4 className="f4 b tc lh-title mb2 primary">Markup</h4>
        <p>We haven't turned our backs on back-ends at all, we just use them in a different way nowadays. We have a wealth of experience in working with GraphCool, Serverless, StdLib and anything that can be coded with a little bit of NodeJS. Part of the JAMStack approach is that you can pull data from an API in order to generate your static content, deploy that to a CDN and your customers get to experience lightning fast websites.</p>
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