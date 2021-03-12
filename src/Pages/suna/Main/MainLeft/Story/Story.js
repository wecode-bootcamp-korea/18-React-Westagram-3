import React from 'react';
import StoryList from './StoryList/StoryList';
import './Story.scss';

class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      storyList: [],
    };
  }

    componentDidMount() {
    fetch('/data/storyData.json',)
      .then(res => res.json())
      .then(data => {
        this.setState({
          storyList: data,     
        });
      });
  }

  render() {
  const { storyList } = this.state;
    return (
        <section id="story-nav">
          <div className="slideWrap">
            <div className="slideList">
              <div className="story-contents">
              {storyList.map(story => {
                return (
                  <StoryList 
                  key={story.id}
                  name={story.userName}
                  imgSrc={story.profileSrc}
                  isLive={story.isLive} />
                  );
              })}
              </div>
              <div className="story-btn-box">
                <button type="button" className="slideBtnPrev">Prev</button>
                <button type="button" className="slideBtnNext">Next</button>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Story;



