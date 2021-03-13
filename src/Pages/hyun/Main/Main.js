import React from "react";
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import Header from "./Header/Header";
import Stories from "./Stories/Stories";
import Feeds from "./Feeds/Feeds";
import MainRight from "./MainRight/MainRight";
import "./Main.scss";

class MainHyun extends React.Component {
  render() {
    return (
      <div className="MainHyun">
        <Header />
        <main>
          <div className="centerBox">
            <article className="storiesAndFeeds">
              <Stories />
              <Feeds />
            </article>
            <MainRight />
          </div>
        </main>
      </div>
    );
  }
}

export default MainHyun;
