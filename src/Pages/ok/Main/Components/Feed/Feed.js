import React, { Component } from "react";
import FeedTitle from "./FeedTitle";
import FeedImg from "./FeedImg";
import FeedComment from "./FeedComment";

class Feed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const titleData = {
      username: this.props.data.username,
      userplace: this.props.data.userplace,
      imgURL: this.props.data.imgURL1,
      storyActive: this.props.data.storyActive,
    };
    const imgData = { imgURL: this.props.data.imgURL2 };
    const commentData = {
      commentData: this.props.data.commentData,
      comments: this.props.data.comments,
    };
    return (
      <article className="content-article">
        <FeedTitle data={titleData}></FeedTitle>
        <FeedImg data={imgData}></FeedImg>
        <FeedComment data={commentData}></FeedComment>
      </article>
    );
  }
}

export default Feed;
