import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    const { user, comment } = this.props;
    return (
      <div className="comments__row">
        <div className="comment">
          <span className="comment__userId">{user}</span>
          <span className="comment__contents">{comment}</span>
        </div>
        <i className="fas fa-ellipsis-h"></i>
        <i className="far fa-heart"></i>
      </div>
    );
  }
}

export default Comment;
