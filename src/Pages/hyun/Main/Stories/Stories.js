import React, { Component } from "react";
import "./Stories.scss";

export class Stories extends Component {
  render() {
    return (
      <section className="stories">
        <div className="story story1">
          <img
            alt="ch.keeps"
            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/117648414_727855131400183_4085965008266904814_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=L_dpIG-MxAAAX_Tu_Jz&tp=1&oh=67f632ff2d9b1945e964d0961c9afd58&oe=60641FA9"
          />
          <span>ch.keeps</span>
        </div>
        <div className="story story2">
          <img
            alt="sukicat"
            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68763591_384685372220491_3522731321480708096_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=BvdQ1M1vNtkAX9-4Od-&oh=a0d1ca5960a4b2595c4362fde7db0e70&oe=60665414"
          />
          <span>sukicat</span>
        </div>
        <div className="story story3">
          <img
            alt="itsselynn"
            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119188310_325746038538319_302232268190399447_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0pZGvKEQO4sAX-_EOCD&oh=eff1dda0b9a5bcbd290980b3fe7d677a&oe=6066EF23"
          />
          <span>itsselynn</span>
        </div>
      </section>
    );
  }
}

export default Stories;
