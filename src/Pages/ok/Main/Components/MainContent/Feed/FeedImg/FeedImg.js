import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FeedImg.scss";

class FeedImg extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    leftValue: 0,
    heightValue: 500,
    prevBtnActive: false,
    nextBtnActive: false,
  };

  slideMove = e => {
    const {
      className,
      parentElement: { clientWidth },
    } = e.target;
    const {
      data: { imgURL },
    } = this.props;
    const { leftValue } = this.state;
    const minLeftValue = clientWidth * (imgURL.length - 1) * -1;
    this.setState(
      {
        leftValue: className.includes("prev")
          ? leftValue + clientWidth
          : leftValue - clientWidth,
        prevBtnActive: true,
        nextBtnActive: true,
      },
      () => {
        const { leftValue } = this.state;
        if (leftValue === 0) {
          this.setState({
            leftValue: 0,
            prevBtnActive: false,
          });
        } else if (leftValue === minLeftValue) {
          this.setState({
            leftValue: minLeftValue,
            nextBtnActive: false,
          });
        }
      }
    );
  };

  componentDidMount() {
    const {
      data: { imgURL },
    } = this.props;
    this.setState({
      nextBtnActive: imgURL.length > 1 ? true : false,
    });
  }

  render() {
    const { imgURL } = this.props.data;
    const { leftValue, prevBtnActive, nextBtnActive } = this.state;

    return (
      <div className="feed-img" ref={this.Slide}>
        <ul className="feed-slide" style={{ left: leftValue }}>
          {imgURL.map((url, index) => {
            return (
              <li key={index} className="slide-list">
                <img src={url} alt="피드이미지"></img>
              </li>
            );
          })}
        </ul>
        <div className="slide-button-wrap">
          <Link
            className={`slide-button prev ${prevBtnActive ? "active" : ""}`}
            onClick={this.slideMove}
          />
          <Link
            className={`slide-button next ${nextBtnActive ? "active" : ""}`}
            onClick={this.slideMove}
          />
        </div>
      </div>
    );
  }
}

export default FeedImg;
