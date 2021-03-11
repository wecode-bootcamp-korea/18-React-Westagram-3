import React from 'react';
import './Story.scss';

class Story extends React.Component {
  render() {
    return (
        <section id="story-nav">
          <div className="follow-story">
            <img
              alt="story"
              src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
              className="profile-img"
            />
            <p className="story-live">Live</p>
            <p className="follow-name" />
          </div>
        </section>
    );
  }
}

export default Story;



