import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./MainRight.scss";

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
          <img
            src="https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fdel27-1.fna.fbcdn.net&_nc_ohc=-U1ua_8bi5cAX_wBAmO&oh=1f6ecc70644553594974d2ac7c3ddfc2&oe=606BC40F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
            alt="프로필"
          />
          <div className="user-info">
            <Link>seung_ok12</Link>
            <span>정승옥</span>
          </div>
          <Link>전환</Link>
        </div>
        <div className="right-recommend">
          <div className="recommend-title">
            <span>회원님을 위한 추천</span>
            <Link>모두 보기</Link>
          </div>
          {this.state.notFriend.map((recommdendUser, index) => {
            return (
              <div key={index} className="recommend-list">
                <img src={recommdendUser.imgUrl} alt="사이드 이미지" />
                <div className="list-info">
                  <Link>{recommdendUser.username}</Link>
                  <span>회원님을 팔로우합니다</span>
                </div>
                <Link>팔로우</Link>
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
