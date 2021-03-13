import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as farHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faSmile,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";
import CommentOption from "./CommentOption";
import CommentList from "./CommentList/CommentList";
import { UrlPath } from "../../../../../UrlPath";
import "./FeedComment.scss";

class FeedComment extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    addBtnActive: false,
    optionActive: false,
    moreBtnActive: true,
    multiClickBlock: false,
    deleteCommentId: null,
    commentValue: "",
    token: JSON.parse(localStorage.getItem("token")),
    likes: this.props.data.likes_count,
    heartClick: this.props.data.already_like,
    commentList: this.props.data.comments,
  };

  toggleHeart = () => {
    const { multiClickBlock, heartClick } = this.state;
    if (multiClickBlock) {
      alert("연속 클릭을 방지합니다!");
      return false;
    }
    this.setState(
      {
        heartClick: !heartClick,
        multiClickBlock: true,
      },
      async () => {
        const { heartClick, likes } = this.state;
        const {
          data: { id },
        } = this.props;
        this.setState({
          likes: heartClick ? likes + 1 : likes - 1,
        });
        // 데이터 요청시 사용
        await fetch(`${UrlPath}/posting/like`, {
          method: "POST",
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
          body: JSON.stringify({
            posting_id: id,
            like: heartClick ? "like" : "unlike",
          }),
        }).then(res => {
          if (res.status >= 200 && res.status < 300) return res.json();
          else {
            alert("에러발생");
            return false;
          }
        });
        setTimeout(() => {
          this.setState({
            multiClickBlock: false,
          });
        }, 4000);
      }
    );
  };

  toggleMoreBtn = () => {
    const { moreBtnActive } = this.state;
    this.setState({
      moreBtnActive: !moreBtnActive,
    });
  };

  toggleOption = (e, commentId) => {
    const { optionActive } = this.state;
    this.setState({
      optionActive: !optionActive,
      deleteCommentId: commentId ? commentId : null,
    });
  };

  addComment = async e => {
    const {
      data: { id },
    } = this.props;
    const { commentValue, commentList } = this.state;
    if (e.charCode === 13 || e.type === "click") {
      if (commentValue === "") return;
      const newComment = {
        comment_id: uuid(),
        username: JSON.parse(localStorage.getItem("user")),
        content: commentValue,
      };
      // 데이터 요청시 사용
      await fetch(`${UrlPath}/posting/comment`, {
        method: "POST",
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
        body: JSON.stringify({
          posting_id: id,
          content: commentValue,
        }),
      }).then(res => {
        if (res.status >= 200 && res.status < 300) {
          res.json();
        } else {
          alert("요청 오류 발생!");
          return false;
        }
      });
      this.setState({
        commentList: [...commentList, newComment],
        addBtnActive: false,
        moreBtnActive: false,
        commentValue: "",
      });
    }
  };

  commentValueChange = e => {
    const { value } = e.target;
    this.setState({
      addBtnActive: value ? true : false,
      commentValue: value,
    });
  };

  deleteComment = async () => {
    const { commentList, deleteCommentId, optionActive } = this.state;
    // 데이터 요청시 사용
    await fetch(`${UrlPath}/posting/comment/delete`, {
      method: "POST",
      headers: { Authorization: JSON.parse(localStorage.getItem("token")) },
      body: JSON.stringify({
        comment_id: deleteCommentId,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (res.message === "SUCCESS") {
          this.setState({
            commentList: commentList.filter(
              comment => comment.comment_id !== deleteCommentId
            ),
          });
        } else if (res.message === "COMMENT_DELETE_ERROR") {
          alert("다른 유저의 댓글은 삭제할 수 없습니다!");
        }
      });
    this.setState({
      commentList: commentList.filter(
        comment => comment.comment_id !== deleteCommentId
      ),
      optionActive: !optionActive,
    });
  };

  render() {
    const {
      addBtnActive,
      optionActive,
      moreBtnActive,
      commentList,
      heartClick,
      likes,
      commentValue,
    } = this.state;
    const {
      data: { username, content },
    } = this.props;

    return (
      <>
        <div className="feed-comments">
          <div className="comments-reaction">
            <div className="reaction-type">
              <FontAwesomeIcon
                style={{ color: heartClick ? "red" : "#262626" }}
                icon={heartClick ? fasHeart : farHeart}
                onClick={this.toggleHeart}
              />
              <FontAwesomeIcon icon={faComment} />
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
            <div>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
          <ul
            className={`comments-list ${moreBtnActive ? "over-sentence" : ""}`}
          >
            <li className="list-like">
              <span>
                <Link className="like-main">택향님 추가좀</Link>
              </span>
              님 외
              <span>
                <Link className="like-other"> {likes}명</Link>이 좋아합니다.
              </span>
            </li>
            <li className="list-user">
              <p>
                <Link className="user-main">{username}</Link>
                <span>{content}</span>
              </p>
            </li>
            <li className="list-comments">
              <span className="gray">
                <Link>
                  댓글 {commentList.length ? commentList.length : 0}개 모두 보기
                </Link>
              </span>
            </li>
            {commentList.length &&
              commentList.map(comment => {
                return (
                  <CommentList
                    key={comment.comment_id}
                    data={comment}
                    toggleOption={this.toggleOption}
                  />
                );
              })}
          </ul>
          <span className="list-time gray">2 시간 전</span>
          {commentList.length > 4 && (
            <span className="more-btn" onClick={this.toggleMoreBtn}>
              . . . 더보기
            </span>
          )}
        </div>
        <div className="feed-add">
          <FontAwesomeIcon icon={faSmile} />
          <input
            type="text"
            className="add-write"
            value={commentValue}
            onChange={this.commentValueChange}
            onKeyPress={this.addComment}
          />
          <Link
            className={`add-btn ${addBtnActive ? "active" : ""}`}
            onClick={this.addComment}
          >
            게시
          </Link>
        </div>
        <CommentOption
          optionActive={optionActive}
          deleteComment={this.deleteComment}
          toggleOption={this.toggleOption}
        />
      </>
    );
  }
}

export default FeedComment;
