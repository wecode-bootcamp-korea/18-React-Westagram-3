import React, { Component } from "react";
import FeedTitle from "./FeedComponent/FeedTitle";
import FeedImg from "./FeedComponent/FeedImg";
import FeedComment from "../Feed/FeedComponent/FeedComment";
import "./Feed.scss";

class Feed extends Component {
  constructor(props) {
    super(props);
    console.log("부모 consturctor");
  }
  componentDidMount() {
    console.log("부모 componentDidMount");
  }
  componentDidUpdate() {
    console.log("부모 componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("부모 componentWillUnmount");
  }
  render() {
    console.log("부모 render");
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
      likes: this.props.data.like,
    };
    return (
      <article className="content-feed">
        <FeedTitle data={titleData}></FeedTitle>
        <FeedImg data={imgData}></FeedImg>
        <FeedComment data={commentData}></FeedComment>
      </article>
    );
  }
}

export default Feed;