import React, { Component } from "react";
import "./StoryList.scss";

class StoryList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    leftValue: 0,
    gap: 0,
    storyActive: this.props.userData.filter(e => e.storyActive === true),
  };
  storyMove = e => {
    const { className, parentElement } = e.target;
    const gap =
      this.state.storyActive.length * 81 - parentElement.clientWidth + 15;
    const moveSize =
      parentElement.clientWidth < 260
        ? parentElement.clientWidth
        : gap < 260
        ? gap
        : 260;
    this.setState(
      {
        gap,
        leftValue: className.includes("story-prev")
          ? this.state.leftValue + moveSize
          : this.state.leftValue - moveSize,
      },
      () => {
        console.log("callback");
        this.setState({
          leftValue:
            this.state.leftValue > 0
              ? 0
              : this.state.leftValue < this.state.gap * -1
              ? this.state.gap * -1
              : this.state.leftValue,
        });
      }
    );
  };
  render() {
    return (
      <div className="content-story">
        <ul className="story-wrap" style={{ left: this.state.leftValue }}>
          {this.state.storyActive.map((storyUser, index) => {
            return (
              <li key={index} className="story-list">
                <div className="story-box story-active">
                  <img src={storyUser.imgUrl} alt="스토리" />
                </div>
                <p>{storyUser.username}</p>
              </li>
            );
          })}
        </ul>
        <div className="story-button-wrap">
          <button
            className="story-button story-prev active"
            onClick={this.storyMove}
          ></button>
          <button
            className="story-button story-next active"
            onClick={this.storyMove}
          ></button>
        </div>
      </div>
    );
  }
}

export default StoryList;
