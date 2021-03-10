import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    console.log("this.props : ", this.props);
    return (
      <div className="comments__row">
        <div className="comment">
          <span className="comment__userId">{this.props.user}</span>
          <span className="comment__contents">{this.props.comment}</span>
        </div>
        <i className="fas fa-ellipsis-h"></i>
        <i className="far fa-heart"></i>
      </div>
    );
  }
}

export default Comment;
