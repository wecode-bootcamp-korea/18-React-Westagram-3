import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Aside from "./Aside/Aside";
import Feeds from "./Feeds/Feeds";
import Stories from "./Stories/Stories";
import "./Main.scss";

class Mmain extends Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/feedData.json", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          feedList: data,
        });
      });
  }
  render() {
    const { feedList } = this.state;
    console.log("feed data : ", feedList);

    return (
      <main>
        <div className="main-center">
          <Stories />
          {feedList.map((feed) => {
            return (
              <Feeds
                username={feed.userName}
                profileimg={feed.profileImg}
                feedimg={feed.feedImg}
                key={feed.id}
              />
            );
          })}
        </div>
        <Aside />
      </main>
    );
  }
}
class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <Mmain />
      </div>
    );
  }
}
export default Main;
