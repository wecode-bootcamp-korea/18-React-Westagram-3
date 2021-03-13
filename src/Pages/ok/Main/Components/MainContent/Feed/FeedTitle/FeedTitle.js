import React, { Component } from "react";
import "./FeedTitle.scss";

class FeedTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: { username, posting_id },
      toggleOption,
    } = this.props;
    return (
      <div className="feed-title">
        <div className="feed-profile story-active">
          <img
            src="https://www.i-boss.co.kr/template/DESIGN_shared/program/theme/01/THUMBNAIL_60_60_icon_rep_box.gif"
            alt="프로필 사진"
          />
        </div>
        <div className="feed-user">
          <div className="user-name">{username}</div>
          <div className="user-place">택향님 추가좀</div>
        </div>
        <span
          className="delete-wrap title"
          onClick={e => {
            toggleOption(e, posting_id);
          }}
        >
          <span className="delete-btn"></span>
        </span>
      </div>
    );
  }
}

export default FeedTitle;
