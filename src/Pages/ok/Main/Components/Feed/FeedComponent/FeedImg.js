import React, { Component } from "react";

class FeedImg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgURL } = this.props.data;
    return (
      <div className="article-img">
        <ul className="article-slide">
          {imgURL.map((url, index) => {
            return (
              <li key={index} className="slide-list">
                <img src={url} alt="피드이미지"></img>
              </li>
            );
          })}
        </ul>
        <div className="slide-button-wrap">
          <a className="slide-button prev"></a>
          <a className="slide-button next"></a>
        </div>
      </div>
    );
  }
}

export default FeedImg;
