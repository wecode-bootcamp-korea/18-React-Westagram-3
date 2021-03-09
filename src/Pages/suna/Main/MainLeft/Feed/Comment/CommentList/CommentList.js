import React, { Component } from 'react';
import './CommentList.scss';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }
  render() {
    return (
      <div>
        <span>{this.props.name}</span>
        <span>{this.props.comment}</span>
      </div>
    );
  }
}

export default CommentList;