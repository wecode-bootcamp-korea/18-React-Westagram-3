import React, { Component } from "react";
import "./StoryList.scss";

class StoryList extends Component {
  constructor(props) {
    super(props);
    this.storyWrap = React.createRef();
  }
  state = {
    leftValue: 0,
    gap: 0,
    storyActive: this.props.userData.filter(user => user.storyActive === true),
  };
  storyMove = e => {
    const { className } = e.target;
    const gap =
      this.state.storyActive.length * 81 -
      this.storyWrap.current.clientWidth +
      15;
    const moveSize =
      this.storyWrap.clientWidth < 260
        ? this.storyWrap.clientWidth
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
  componentDidMount() {
    const gap =
      this.state.storyActive.length * 81 -
      this.storyWrap.current.clientWidth +
      15;
    this.setState({
      gap,
    });
  }
  render() {
    return (
      <div className="content-story">
        <ul
          className="story-wrap"
          style={{ left: this.state.leftValue }}
          ref={this.storyWrap}
        >
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
        <button
          className={
            "story-button story-prev " +
            (this.state.leftValue < 0 ? "active" : "")
          }
          onClick={this.storyMove}
        ></button>
        <button
          className={
            "story-button story-next " +
            (this.state.leftValue > this.state.gap * -1 ? "active" : "")
          }
          onClick={this.storyMove}
        ></button>
      </div>
    );
  }
}

export default StoryList;
