import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
  }
  render() {
    console.log(this.props);
    return (
      <li>
        <h3 className="user-name">{this.props.name}</h3>
        &nbsp;
        <span className="user-comment"> 
        {this.props.commentValue} </span>
        <i
          aria-label="좋아요"
        className="far fa-heart comment-like comment-btn"
        ></i>
      </li>
    );
  }
}
export default Comment;