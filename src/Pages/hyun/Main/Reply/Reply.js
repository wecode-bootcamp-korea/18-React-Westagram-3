import React, { Component } from 'react'

import './Reply.scss'


class Reply extends Component {
  constructor() {
    super();
    this.state = {
      userId: "pika_pika",
      reply: "",
      replyList: ['안녕👀', '하이🏝🏝🏝🏝🏝']
    }
  }

  handleReplyInput = (e) => {
    this.setState({
      reply: e.target.value
    })
  }

  handleReply = (e) => {
    if (e.key === 'Enter') {
      this.setState({
      replyList: this.state.replyList.concat(this.state.reply),
      reply: "",
    })
    }
  }
  

  render() {
    // console.log(this.state)
    return (
      <div className="Reply">
        <div className="replyBox">
          <ul>
            {this.state.replyList.map((Str) =>
              <li><span className="userId">{this.state.userId}</span>{Str}</li>)}
          </ul>
        </div>
        <input onKeyPress={this.handleReply} onChange={this.handleReplyInput} className="replyInput" type="text" placeholder="댓글 달기..." />
      </div>
    )
  }
}

export default Reply;
