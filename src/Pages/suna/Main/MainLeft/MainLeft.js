import React from 'react';
import Story from './Story/Story';
import Feed from './Feed/Feed';
import './MainLeft.scss';

class MainLeft extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
      feedValue: "",
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,     
        });
      });
  }

  render() {
    const { feedList } = this.state;
    return (
        <div className="main-left">
          <Story />
          {feedList.map(feed => {
              return (
          <Feed 
          key={feed.id}
          name={feed.userName}
          profileImg={feed.profileSrc}
          userLoca={feed.userLoca}
          feedImg={feed.feedSrc} />
          );
          })}
        </div>
    );
  }
}

export default MainLeft;
