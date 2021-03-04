import React, { Component } from "react";
import {
  faHeart as farHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faSmile,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentList from "./CommentList";

class FeedComment extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    heartClick: false,
    comments: this.props.data.comments,
  };
  toggleHeart = () => {
    this.setState({
      heartClick: !this.state.heartClick,
    });
  };
  writeComment = e => {
    const {
      target: { value },
      charCode,
    } = e;
    if (value !== "" && charCode === 13) {
      const newComment = {
        id: this.state.comments.length,
        name: "seungok_12",
        comment: value,
      };
      this.setState({
        comments: [...this.state.comments, newComment],
      });
      e.target.value = "";
    }
  };
  render() {
    const { commentData } = this.props.data;
    console.log(this.state.comments);
    return (
      <>
        <div className="article-comments">
          <div className="comments-reaction">
            <div className="reaction-type">
              <FontAwesomeIcon
                style={
                  this.state.heartClick
                    ? { color: "red" }
                    : { color: "#262626" }
                }
                icon={this.state.heartClick ? fasHeart : farHeart}
                onClick={this.toggleHeart}
              ></FontAwesomeIcon>
              <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </div>
            <div>
              <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
            </div>
          </div>
          <ul className="comments-list">
            <li className="list-like">
              <span>
                <a className="like-main">{commentData.likeMain}</a>
              </span>
              님
              <span>
                <a className="like-other">여러 명</a>이 좋아합니다.
              </span>
            </li>
            <li className="list-user">
              <p>
                <a className="user-main">{commentData.user}</a>
                <span>{commentData.userComment}</span>
              </p>
            </li>
            <li className="list-comments">
              <span className="gray">
                <a>댓글 {this.state.comments.length}개 모두 보기</a>
              </span>
            </li>
            {this.state.comments.map(comment => {
              return (
                <CommentList key={comment.id} data={comment}></CommentList>
              );
            })}
          </ul>
          <span className="list-time gray">2 시간 전</span>
        </div>
        <div className="article-myComment">
          <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
          <textarea
            className="comment-input"
            onKeyPress={this.writeComment}
          ></textarea>
          <a className="myComment-add">게시</a>
        </div>
      </>
    );
  }
}

export default FeedComment;
