import React, { Component } from "react";

class FeedOption extends Component {
  render() {
    const { popActive, toggleOption, clickDelete } = this.props;
    return (
      <div className={`popup-wrap ${popActive ? "active" : ""}`}>
        <ul className="popup-select">
          <li className="select-type delete" onClick={clickDelete}>
            피드 삭제
          </li>
          <li className="select-type cancel" onClick={toggleOption}>
            취소
          </li>
        </ul>
      </div>
    );
  }
}

export default FeedOption;
