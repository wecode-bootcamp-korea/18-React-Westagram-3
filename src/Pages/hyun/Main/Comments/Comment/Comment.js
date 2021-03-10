import React, { Component } from 'react'

import './Comment.scss'

export class Comment extends Component {
  render() {
    return (
    <div className='Comment'>
      {this.props.A.map((Str) =>
        <li><span className="userId">{this.props.B}</span>{Str}</li>)
    }
    </div>
    )
  }
}

export default Comment;
