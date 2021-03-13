import React, { Component } from "react";

import "./Comment.scss";

export class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        {this.props.itsCommentList.map((el) => (
          <li>
            <span className="userId">{el.userId}</span>
            {el.comment}
          </li>
        ))}
      </div>
    );
  }
}

export default Comment;
