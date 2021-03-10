import React, { Component } from "react";
import Comment from "./Comment/Comment";
import "./Feeds.scss";

import imgProfile from "../../../../../src/images/songhee/myprofile.jpg";
import imgFeed from "../../../../../src/images/songhee/pic.jpg";

class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      postValid: false,
      inputText: "",
      postText: "",
      commentList: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/commentData.json", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          commentList: data,
        });
      });
  }

  handleInputComment = (e) => {
    const inputValue = e.target.value;
    inputValue
      ? this.setState({ postValid: true })
      : this.setState({ postValid: false });
    this.setState({
      inputText: inputValue,
    });
  };
  handlePost = () => {
    const { inputText, commentList } = this.state;
    this.setState({
      postText: inputText,
      commentList: commentList.concat({
        userName: "songhee",
        content: inputText,
      }),
      inputText: "",
      postValid: false,
    });
  };
  handleEnter = (e) => {
    const enterKey = e.key === "Enter";
    if (enterKey && this.state.postValid) this.handlePost();
  };
  render() {
    return (
      <div className="feeds">
        <article className="feed">
          <div className="feed__head">
            <div className="feed__head__left">
              <img className="feed__head__img" src={imgProfile} alt="" />
              <span className="feed__head__id">songhee</span>
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <img className="feed__img" src={imgFeed} alt="" />
          <div className="feed__icons inPad">
            <span className="feed__icons__left">
              <i className="far fa-heart"></i>
              <i className="far fa-comment"></i>
              <i className="fas fa-location-arrow"></i>
            </span>
            <span className="feed__icons__right">
              <i className="far fa-bookmark"></i>
            </span>
          </div>
          <div className="feed__like inPad">
            좋아요<span className="feed__like__num">300</span>개
          </div>
          <div className="feed__commentList inPad">
            <div className="comments">
              {this.state.commentList.map((comment) => {
                return (
                  <Comment
                    user={comment.userName ? comment.userName : "songhee"}
                    comment={comment.content}
                  />
                );
              })}
            </div>
          </div>
          <div className="feed__update">1일 전</div>
          <div className="feed__myComment inPad">
            <i className="far fa-grin fa-lg"></i>
            <input
              onChange={this.handleInputComment}
              onKeyPress={this.handleEnter}
              type="text"
              placeholder="댓글 달기..."
              value={this.state.inputText}
            />
            <button
              className="comment__btn-post btn-none"
              onClick={
                this.state.inputText
                  ? this.handlePost
                  : (e) => {
                      e.preventDefault();
                    }
              }
              disabled={!this.state.postValid}
            >
              게시
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default Feeds;
