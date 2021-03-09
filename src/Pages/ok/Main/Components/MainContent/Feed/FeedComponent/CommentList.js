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
    this.setState({
      heartClick: !this.state.heartClick,
    });
  };
  render() {
    const { name, comment } = this.props.data;
    return (
      <li className="list-other">
        <p className="comment-wrap">
          <Link className="other-main">{name}</Link>
          <span className="comment-text">{comment}</span>
        </p>
        <FontAwesomeIcon
          style={
            this.state.heartClick ? { color: "red" } : { color: "#262626" }
          }
          icon={this.state.heartClick ? fasHeart : farHeart}
          onClick={this.toggleHeart}
        ></FontAwesomeIcon>
        <span
          className="delete-wrap comment"
          onClick={e => {
            this.props.togglePop(e, this.props.commentId);
          }}
        >
          <span className="delete-btn"></span>
        </span>
      </li>
    );
  }
}

export default CommentList;
