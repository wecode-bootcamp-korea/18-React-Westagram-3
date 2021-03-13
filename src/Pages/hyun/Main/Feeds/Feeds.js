import React, { Component } from "react";
import Comments from "./Comments/Comments";
import "./Feeds.scss";

export class Feeds extends Component {
  render() {
    return (
      <section className="feeds">
        <div className="feed feed1">
          <div className="profile">
            <img
              alt="doowop79 프로필"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/120077226_784973128995560_2429183293847764217_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=sjs37tzdTE4AX8RzOZ0&oh=c0707a475cc36f2123987e465d1703f9&oe=6064E92F"
            />
            <span>doowop79</span>
            <span className="dots">···</span>
          </div>
          <img
            alt="doowop79 피드"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/153554778_1134026250362683_832804551239084161_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=8d1JLyQb7ksAX-8EFlv&tp=1&oh=d7ffb9595c9e2f142e9589816fa593b4&oe=6061376C"
          />
          <Comments />
        </div>
        <div className="feed feed2">
          <div className="profile">
            <img
              alt="roary_city 프로필"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/18948097_104290886846123_4922688508750987264_a.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=GKDrH9N-bFsAX-1-ktS&oh=f3ea19ab82b29b6eb95d882f210dab9d&oe=60636641"
            />
            <span>roary_city</span>
            <span className="dots">···</span>
          </div>
          <img
            alt="roary_city 피드"
            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/155016661_1342889699417284_1228962152844862307_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=d2f_0fpydEcAX9kow_Y&oh=d1e9f5f340dc6b43eff43e037f819ba5&oe=60653DCB"
          />
          <Comments />
        </div>
      </section>
    );
  }
}

export default Feeds;
