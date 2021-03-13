import React from "react";
import Nav from "./Components/Nav/Nav";
import MainContent from "./Components/MainContent/MainContent";
import UserData from "./Data/UserData";
import { UrlPath } from "../UrlPath"; // 데이터 요청시 사용
import "./Main.scss";

class MainOk extends React.Component {
  state = {
    feedData: null,
  };

  getFeedData = async () => {
    // 데이터 요청시 사용
    await fetch(`${UrlPath}/FeedData.json`, {
      method: "GET",
      headers: { Authorization: JSON.parse(localStorage.getItem("token")) },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          feedData: res,
        });
      });
  };

  componentDidMount() {
    this.getFeedData();
  }
  render() {
    const { feedData } = this.state;

    return (
      <div className="main">
        <Nav userData={UserData} getFeedData={this.getFeedData} />
        <section className="main-section">
          <main className="main-wrap">
            <MainContent userData={UserData} feedData={feedData} />
          </main>
        </section>
      </div>
    );
  }
}
export default MainOk;
