import React, { Component } from "react";
import StoryList from "./StoryList/StoryList";
import Feed from "./Feed/Feed";
import FeedOption from "./FeedOption";
import MainRight from "./MainRight/MainRight";
import { UrlPath } from "../../../UrlPath";

class MainContent extends Component {
  state = {
    popActive: false,
    feedData: null,
    deleteFeedId: null,
  };

  toggleOption = (e, postingId) => {
    const { popActive } = this.state;
    this.setState({
      popActive: !popActive,
      deleteFeedId: postingId ? postingId : null,
    });
  };

  clickDelete = async e => {
    const { popActive, feedData, deleteFeedId } = this.state;
    // 데이터 요청시 사용
    await fetch(`${UrlPath}/posting/delete`, {
      method: "POST",
      headers: { Authorization: JSON.parse(localStorage.getItem("token")) },
      body: JSON.stringify({
        postingId: deleteFeedId,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
    this.setState({
      popActive: !popActive,
      feedData: feedData.filter(feed => feed.posting_id !== deleteFeedId),
    });
  };

  componentDidUpdate(prevprops) {
    const { feedData } = this.props;
    if (prevprops.feedData !== feedData) {
      this.setState({
        feedData: feedData,
      });
    }
  }
  render() {
    const { userData } = this.props;
    const { popActive, feedData } = this.state;
    return (
      <div className="main-content">
        <div className="content-wrap">
          <StoryList userData={userData} />
          {feedData &&
            feedData.map(feed => (
              <Feed
                key={feed.postingId}
                data={feed}
                toggleOption={this.toggleOption}
              />
            ))}
          <FeedOption
            popActive={popActive}
            toggleOption={this.toggleOption}
            clickDelete={this.clickDelete}
          />
        </div>
        <MainRight userData={userData} />
      </div>
    );
  }
}

export default MainContent;
