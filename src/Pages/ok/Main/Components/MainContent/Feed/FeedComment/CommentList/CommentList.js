import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CommentList.scss";

class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    heartClick: false,
  };

  toggleHeart = () => {
    const { heartClick } = this.state;
    this.setState({
      heartClick: !heartClick,
    });
  };

  render() {
    const { heartClick } = this.state;
    const {
      data: { username, content, comment_id },
      toggleOption,
    } = this.props;
    return (
      <li className="list-other">
        <p className="comment-wrap">
          <Link className="other-main">{username}</Link>
          <span className="comment-text">{content}</span>
        </p>
        <FontAwesomeIcon
          style={{ color: heartClick ? "red" : "#262626" }}
          icon={heartClick ? fasHeart : farHeart}
          onClick={this.toggleHeart}
        />
        <span
          className="delete-wrap comment"
          onClick={e => {
            toggleOption(e, comment_id);
          }}
        >
          <span className="delete-btn"></span>
        </span>
      </li>
    );
  }
}

export default CommentList;
