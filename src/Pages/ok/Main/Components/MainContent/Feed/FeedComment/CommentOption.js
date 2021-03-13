import React, { Component } from "react";

class CommentOption extends Component {
  render() {
    const { optionActive, toggleOption, deleteComment } = this.props;
    return (
      <div className={"popup-wrap " + (optionActive ? "active" : "")}>
        <ul className="popup-select">
          <li className="select-type delete" onClick={deleteComment}>
            댓글 삭제
          </li>
          <li className="select-type cancel" onClick={toggleOption}>
            취소
          </li>
        </ul>
      </div>
    );
  }
}

export default CommentOption;
