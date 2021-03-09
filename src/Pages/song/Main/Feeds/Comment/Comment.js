import React, { Component } from "react";

class Comment extends Component {
  render() {
    console.log("this.props : ", this.props.data);
    return (
      <div className="comments__row">
        <div className="comment">
          <span className="comment__userId">songhee</span>
          <span className="comment__contents">{this.props.data}</span>
        </div>
        <i id="test1" className="fas fa-ellipsis-h"></i>
        <i className="far fa-heart"></i>
      </div>
    );
  }
}

export default Comment;
