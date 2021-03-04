import React, { Component } from "react";

class StoryList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    storyActive: this.props.userData.filter(e => e.storyActive === true),
  };
  render() {
    return (
      <div className="content-feed">
        <ul className="feed-wrap">
          {this.state.storyActive.map(storyUser => {
            return (
              <li className="feed-list">
                <div className="story-box story-active">
                  <img src={storyUser.imgUrl} alt="스토리" />
                </div>
                <p>{storyUser.username}</p>
              </li>
            );
          })}
        </ul>
        <div className="feed-button-wrap">
          <button className="feed-button feed-prev active"></button>
          <button className="feed-button feed-next active"></button>
        </div>
      </div>
    );
  }
}

export default StoryList;
