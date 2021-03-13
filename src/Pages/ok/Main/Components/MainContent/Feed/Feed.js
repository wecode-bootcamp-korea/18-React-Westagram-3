import React, { Component } from "react";
import FeedTitle from "./FeedTitle/FeedTitle";
import FeedImg from "./FeedImg/FeedImg";
import FeedComment from "./FeedComment/FeedComment";
import "./Feed.scss";

class Feed extends Component {
  render() {
    const { data, toggleOption } = this.props;
    const titleData = {
      posting_id: data.posting_id,
      username: data.username,
    };
    const imgData = { imgURL: data.image_urls };
    const commentData = {
      postingId: data.posting_id,
      username: data.username,
      comments: data.comments,
      content: data.content,
      likes_count: data.like_count,
      already_like: data.already_like,
    };
    return (
      <article className="content-feed">
        <FeedTitle data={titleData} toggleOption={toggleOption} />
        <FeedImg data={imgData} />
        <FeedComment data={commentData} />
      </article>
    );
  }
}

export default Feed;
