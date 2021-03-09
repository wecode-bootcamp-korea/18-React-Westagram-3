import React, { Component } from 'react';
import './CommentList.scss';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }
  render() {
    const { name, comment } = this.props;
    return (
      <div>
        <span>{name}</span>
        <span>{comment}</span>
      </div>
    );
  }
}

export default CommentList;