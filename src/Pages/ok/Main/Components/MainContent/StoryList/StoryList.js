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
  };

  storyMove = e => {
    const { className } = e.target;
    const { leftValue } = this.state;
    const { userData } = this.props;
    const storyActivUsers = userData.filter(data => data.storyActive === true);
    const gap =
      storyActivUsers.length * 81 - this.storyWrap.current.clientWidth + 15;
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
          ? leftValue + moveSize
          : leftValue - moveSize,
      },
      () => {
        const { leftValue, gap } = this.state;
        this.setState({
          leftValue:
            leftValue > 0 ? 0 : leftValue < gap * -1 ? gap * -1 : leftValue,
        });
      }
    );
  };

  componentDidMount() {
    const { userData } = this.props;
    const storyActivUsers = userData.filter(data => data.storyActive === true);
    const gap =
      storyActivUsers.length * 81 - this.storyWrap.current.clientWidth + 15;
    this.setState({
      gap,
    });
  }

  render() {
    const { leftValue, gap } = this.state;
    const { userData } = this.props;
    const storyActivUsers = userData.filter(data => data.storyActive === true);

    return (
      <div className="content-story">
        <ul
          className="story-wrap"
          style={{ left: leftValue }}
          ref={this.storyWrap}
        >
          {storyActivUsers.map((storyUser, index) => {
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
          className={`story-button story-prev ${leftValue < 0 ? "active" : ""}`}
          onClick={this.storyMove}
        />
        <button
          className={`story-button story-next ${
            leftValue > gap * -1 ? "active" : ""
          }`}
          onClick={this.storyMove}
        />
      </div>
    );
  }
}

export default StoryList;
