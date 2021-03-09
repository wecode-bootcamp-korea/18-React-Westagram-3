import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  faHeart as farHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faSmile,
} from "@fortawesome/free-regular-svg-icons";
import uuid from "react-uuid";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentList from "./CommentList";
import "./FeedComment.scss";

class FeedComment extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    heartClick: false,
    popActive: false,
    inputValueCheck: false,
    moreBtnToggle: false,
    deleteCommentId: null,
    commentValue: "",
    likes: this.props.data.likes,
    comments: this.props.data.comments,
  };
  toggleHeart = () => {
    this.setState(
      {
        heartClick: !this.state.heartClick,
      },
      () => {
        const { heartClick, likes } = this.state;
        if (heartClick && likes === 0) {
          this.setState({
            likes: likes + 1,
          });
        } else {
          this.setState({
            likes: likes - 1,
          });
        }
      }
    );
  };
  togglePop = (e, commentId) => {
    this.setState({
      popActive: !this.state.popActive,
      deleteCommentId: commentId,
    });
  };
  toggleMoreBtn = () => {
    this.setState({
      moreBtnToggle: !this.state.moreBtnToggle,
    });
  };
  addComment = e => {
    if (e.charCode === 13 || e.type === "click") {
      if (this.state.commentValue === "") return "";
      const newComment = {
        id: uuid(),
        name: "seungok_12",
        comment: this.state.commentValue,
      };
      this.setState({
        comments: [...this.state.comments, newComment],
        inputValueCheck: false,
        moreBtnToggle: false,
        commentValue: "",
      });
    }
  };
  commentValueChange = e => {
    const { value } = e.target;
    this.setState({
      inputValueCheck: value ? true : false,
      commentValue: value,
    });
  };
  clickDelete = () => {
    this.setState({
      popActive: !this.state.popActive,
      comments: this.state.comments.filter(
        comment => comment.id !== this.state.deleteCommentId
      ),
    });
  };
  render() {
    const { commentData } = this.props.data;
    return (
      <>
        <div className="feed-comments">
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
          <ul
            className={
              "comments-list " +
              (this.state.moreBtnToggle ? "over-sentence" : "")
            }
          >
            <li className="list-like">
              <span>
                <Link className="like-main">{commentData.likeMain}</Link>
              </span>
              님 외
              <span>
                <Link className="like-other"> {this.state.likes}명</Link>이
                좋아합니다.
              </span>
            </li>
            <li className="list-user">
              <p>
                <Link className="user-main">{commentData.user}</Link>
                <span>{commentData.userComment}</span>
              </p>
            </li>
            <li className="list-comments">
              <span className="gray">
                <Link>댓글 {this.state.comments.length}개 모두 보기</Link>
              </span>
            </li>
            {this.state.comments.length > 0
              ? this.state.comments.map(comment => {
                  return (
                    <CommentList
                      key={comment.id}
                      commentId={comment.id}
                      data={comment}
                      togglePop={this.togglePop}
                    ></CommentList>
                  );
                })
              : ""}
          </ul>
          <span className="list-time gray">2 시간 전</span>
          {this.state.comments.length > 4 ? (
            <span className="more-btn" onClick={this.toggleMoreBtn}>
              . . . 더보기
            </span>
          ) : null}
        </div>
        <div className="feed-add">
          <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
          <input
            type="text"
            className="add-write"
            value={this.state.commentValue}
            onChange={this.commentValueChange}
            onKeyPress={this.addComment}
          ></input>
          <Link
            className={
              "add-btn " + (this.state.inputValueCheck ? "active" : "")
            }
            onClick={this.addComment}
          >
            게시
          </Link>
        </div>
        <div className={"popup-wrap " + (this.state.popActive ? "active" : "")}>
          <ul className="popup-select">
            <li className="select-type delete" onClick={this.clickDelete}>
              삭제
            </li>
            <li className="select-type cancel" onClick={this.togglePop}>
              취소
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default FeedComment;
