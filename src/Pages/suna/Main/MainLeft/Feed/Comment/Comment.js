import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state ={};
  }
  render() {
    const { name, commentValue } = this.props;
    return (
      <li>
        
        <h3 className="user-name">{name}</h3>
        &nbsp;
        <span className="user-comment"> 
        {commentValue} </span>
        <i
          aria-label="좋아요"
        className="far fa-heart comment-like comment-btn"
        ></i>
      </li>
    );
  }
}
export default Comment;