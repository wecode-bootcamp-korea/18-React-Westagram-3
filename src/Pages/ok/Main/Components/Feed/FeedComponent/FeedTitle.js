import React, { Component } from "react";

class FeedTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { storyActive, username, userplace, imgURL } = this.props.data;
    return (
      <div className="article-title">
        <div
          className={`article-profile ` + (storyActive ? "story-active" : "")}
        >
          <img src={imgURL} alt="프로필 사진" />
        </div>
        <div className="title-user">
          <div className="user-name">{username}</div>
          <div className="user-place">{userplace}</div>
        </div>
        <span className="delete-wrap title">
          <span className="delete-btn"></span>
        </span>
      </div>
    );
  }
}

export default FeedTitle;
