import React, { Component } from "react";
import "./FeedImg.scss";
class FeedImg extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    leftValue: 0,
    heightValue: 500,
    prevBtnActive: false,
    nextBtnActive: this.props.data.imgURL.length >= 2 ? true : false,
  };
  slideMove = e => {
    const {
      className,
      parentElement: { clientWidth },
    } = e.target;
    const minLeftValue = clientWidth * (this.props.data.imgURL.length - 1) * -1;
    this.setState(
      {
        leftValue: className.includes("prev")
          ? this.state.leftValue + clientWidth
          : this.state.leftValue - clientWidth,
        prevBtnActive: true,
        nextBtnActive: true,
      },
      () => {
        if (this.state.leftValue === 0) {
          this.setState({
            leftValue: 0,
            prevBtnActive: false,
          });
        } else if (this.state.leftValue === minLeftValue) {
          this.setState({
            leftValue: minLeftValue,
            nextBtnActive: false,
          });
        }
      }
    );
  };
  render() {
    const { imgURL } = this.props.data;
    return (
      <div className="feed-img" ref={this.Slide}>
        <ul className="feed-slide" style={{ left: this.state.leftValue }}>
          {imgURL.map((url, index) => {
            return (
              <li key={index} className="slide-list">
                <img src={url} alt="피드이미지"></img>
              </li>
            );
          })}
        </ul>
        <div className="slide-button-wrap">
          <a
            className={
              "slide-button prev " + (this.state.prevBtnActive ? "active" : "")
            }
            onClick={this.slideMove}
          ></a>
          <a
            className={
              "slide-button next " + (this.state.nextBtnActive ? "active" : "")
            }
            onClick={this.slideMove}
          ></a>
        </div>
      </div>
    );
  }
}

export default FeedImg;
