import React, { Component } from 'react';
import './StoryList.scss';

class StoryList extends Component {
  render() {
    const { name, imgSrc, isLive } = this.props;
    return (
        <div className="follow-story">
            <img
              alt="story"
              src={imgSrc}
              className="profile-img"
            />
            <p className="follow-name"> {name} </p>
            { isLive && <p className="story-live">📢Live</p> }
        </div>
    );
  }
}

export default StoryList;