import React from 'react';
import './MainLeft.scss';
import Story from './Story/Story';
import Feed from './Feed/Feed';

class MainLeft extends React.Component {
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
