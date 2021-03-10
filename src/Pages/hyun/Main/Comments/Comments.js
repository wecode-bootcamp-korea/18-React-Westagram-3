import React, { Component } from 'react'


import Comment from './Comment/Comment'
import './Comments.scss'


class Comments extends Component {
  constructor() {
    super();
    this.state = {
      userId: "pika_pika",
      comment: "",
      commentList: ['안녕👀', '하이🏝🏝🏝🏝🏝']
    }
  }

  handleCommentnput = (e) => {
    this.setState({
      comment: e.target.value,
    })
    console.log('입력했을 때 >>', this.state)
  }

  handleComment = (e) => {
    if (e.key === 'Enter') {
      this.setState({
      commentList: this.state.commentList.concat(this.state.comment)
      })
      e.target.value = "";
    } console.log('엔터 쳤을 때 >>', this.state)
  }
  
  render() {
    console.log('렌더 안에서 >>', this.state)
    return (
      <div className="comments">
        <div className="commentsBox">
          <ul>
            <Comment A={this.state.commentList} B={this.state.userId} />
          </ul>
        </div>
        <input onChange={this.handleCommentnput} onKeyPress={this.handleComment} className="commentInput" type="text" placeholder="댓글 달기..." />
      </div>
    )
  }
}

export default Comments;
