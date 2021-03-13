import React, { Component } from "react";

import Comment from "./Comment/Comment";
import "./Comments.scss";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      userId: "pika_pika",
      comment: "",
      commentList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/commentData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ commentList: data });
      });
  }

  handleCommentInput = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  pressEnter = (e) => {
    if (e.key === "Enter") {
      this.setState({
        commentList: this.state.commentList.concat({
          userId: this.state.userId,
          comment: this.state.comment,
        }),
      });
      e.target.value = "";
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="comments">
        <div className="commentsBox">
          <ul>
            <Comment itsCommentList={this.state.commentList} />
          </ul>
        </div>
        <input
          onChange={this.handleCommentInput}
          onKeyPress={this.pressEnter}
          className="commentInput"
          type="text"
          placeholder="댓글 달기..."
        />
      </div>
    );
  }
}

export default Comments;
