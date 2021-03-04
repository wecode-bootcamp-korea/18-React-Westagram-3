import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCog } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    searchList: [],
    search: "",
    optionToggle: false,
  };
  searchChange = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.searchFind(value);
      }
    );
  };
  searchFind = name => {
    const data =
      name.length === 0
        ? []
        : this.props.userData.filter(e => e.username.includes(name));
    this.setState({
      searchList: data,
    });
  };
  toggleSubOption = e => {
    this.setState({
      optionToggle: !this.state.optionToggle,
    });
  };
  render() {
    return (
      <nav className="main-nav">
        <div className="nav-wrap">
          <a className="logo-wrap" href="/main">
            <img
              className="logo-img"
              src="/images/default_icon/instagram.png"
              alt="로고"
            />
            <h1 className="logo">Westagram</h1>
          </a>
          <div className="search-wrap">
            <input
              id="search"
              name="search"
              type="text"
              placeholder="검색"
              value={this.state.search}
              onChange={this.searchChange}
            />
            <ul
              className={
                "search-view " +
                (this.state.searchList.length > 0 ? "active" : "")
              }
            >
              {this.state.searchList.map(searchData => {
                return (
                  <li className="search-list">
                    <div
                      className={
                        "search-img-box " +
                        (searchData.storyActive ? "story-active" : "")
                      }
                    >
                      <img src={searchData.imgUrl} alt="프로필" />
                    </div>
                    <div className="search-description">
                      <h2>{searchData.username}</h2>
                      <span>{searchData.name}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="triangle-content"></div>
          </div>
          <ul className="sub-wrap">
            <li className="sub-list">
              <img src="/images/default_icon/explore.png" alt="탐색" />
            </li>
            <li className="sub-list">
              <img src="/images/default_icon/heart.png" alt="좋아요" />
            </li>
            <li className="sub-list profile" onClick={this.toggleSubOption}>
              <img src="images/default_icon/profile.png" alt="프로필" />
            </li>
            <div
              className={
                "sub-option " + (this.state.optionToggle ? "active" : "")
              }
            >
              <ul className="option-wrap">
                <li className="option-list">
                  <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                  <span>프로필</span>
                </li>
                <li className="option-list">
                  <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
                  <span>저장됨</span>
                </li>
                <li className="option-list">
                  <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                  <span>설정</span>
                </li>
                <li className="option-list logout">로그아웃</li>
              </ul>
              <span className="triangle-content"></span>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
