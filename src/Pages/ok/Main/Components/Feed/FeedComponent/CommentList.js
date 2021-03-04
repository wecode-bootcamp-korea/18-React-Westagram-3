import React, { Component } from "react";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <a className="other-main">{name}</a>
          <span className="comment-text">{comment}</span>
        </p>
        <FontAwesomeIcon
          style={
            this.state.heartClick ? { color: "red" } : { color: "#262626" }
          }
          icon={this.state.heartClick ? fasHeart : farHeart}
          onClick={this.toggleHeart}
        ></FontAwesomeIcon>
        <span className="delete-wrap comment">
          <span className="delete-btn"></span>
        </span>
      </li>
    );
  }
}

export default CommentList;
