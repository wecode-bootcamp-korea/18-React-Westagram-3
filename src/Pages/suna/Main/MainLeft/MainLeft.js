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

  render() {
    return (
        <div className="main-left">
          <Story />
          <Feed />
        </div>
    );
  }
}

export default MainLeft;
