import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    const { name, commentValue, isLiked } = this.props;
    return (
      <li>
        <h3 className="user-name">{name}</h3>
        <span className="user-comment"> 
        {commentValue} </span>
        <i aria-label="좋아요"
        className= { isLiked ? "far fa-heart comment-like comment-btn clickLike" : "far fa-heart comment-like comment-btn" } />
      </li>
    );
  }
}
export default Comment;