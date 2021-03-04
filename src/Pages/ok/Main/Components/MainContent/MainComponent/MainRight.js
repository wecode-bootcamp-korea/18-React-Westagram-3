import React, { Component } from "react";
import Footer from "./Footer";

class MainRight extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    notFriend: this.props.userData.filter(e => e.friend === false),
  };
  render() {
    return (
      <aside className="main-right">
        <div className="right-user">
          <img src="/images/default_icon/default_profile.jpg" alt="프로필" />
          <div className="user-info">
            <a>seung_ok12</a>
            <span>정승옥</span>
          </div>
          <a>전환</a>
        </div>
        <div className="right-recommend">
          <div className="recommend-title">
            <span>회원님을 위한 추천</span>
            <a>모두 보기</a>
          </div>
          {this.state.notFriend.map(recommdendUser => {
            return (
              <div className="recommend-list">
                <img src={recommdendUser.imgUrl} alt="사이드 이미지" />
                <div className="list-info">
                  <a>{recommdendUser.username}</a>
                  <span>회원님을 팔로우합니다</span>
                </div>
                <a>팔로우</a>
              </div>
            );
          })}
        </div>
        <Footer></Footer>
      </aside>
    );
  }
}

export default MainRight;
