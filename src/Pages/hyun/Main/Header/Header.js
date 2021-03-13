import React, { Component } from "react";
import "./Header.scss";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          <h1>Westagram</h1>
          <input className="searchInput" type="text" placeholder="검색" />
          <div className="icons">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="explore"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="like"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="profile"
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
