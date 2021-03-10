import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: this.props.isLiked,
    };
  }
  handleClick = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
  };
  render() {
    const { user, comment, isLiked } = this.props;
    // this.setState({
    //   isLike: isLiked,
    // });
    return (
      <div className="comment">
        <div>
          <span className="comment__userId">{user}</span>
          <span className="comment__contents">{comment}</span>
        </div>
        <i className="fas fa-ellipsis-h"></i>
        <i
          className={"fa-heart" + (this.state.isLike ? " fas" : " far")}
          onClick={this.handleClick}
        ></i>
      </div>
    );
  }
}

export default Comment;
