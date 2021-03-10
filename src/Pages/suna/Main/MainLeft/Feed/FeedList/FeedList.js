import React from 'react';
import './FeedList.scss';

class FeedList extends React.Component {
  render() {
    const { name, profileImg, userLoca, feedImg } = this.props;
    return (
      <>
      <div className="feed-header">
        <div className="card">
            <img
            src={profileImg}
            alt="profile"
            className="card-img" />
          <div className="card-content">
            <h3 className="user-name">{name}</h3>
            <span className="user-loca">{userLoca}</span>
          </div>
        </div>
        <button type="menu" className="feed-btn">…</button>
      </div>
      <div className="feed-img">
        <img
        src={feedImg}
        alt="user"
        className="user-img"
        />
      </div>
      <div className="feed-footer">
        <div className="feed-reaction">
          <div className="feed-btns">
            <div className="feed-btn">
              <i className="far fa-heart" />
            </div>
            <div className="feed-btn">
              <i className="far fa-comment" />
            </div>
            <div className="feed-btn">
              <i className="far fa-paper-plane" />
            </div>
          </div>
          <div className="feed-btn">
            <i className="far fa-bookmark" />
          </div>
        </div>
      </div>
    </>
    );
  }
}
export default FeedList;