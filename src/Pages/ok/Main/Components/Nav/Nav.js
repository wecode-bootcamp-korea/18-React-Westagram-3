import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCog } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import logo from "../../../../../images/seungok/images/default_icon/instagram.png";
import explore from "../../../../../images/seungok/images/default_icon/explore.png";
import heart from "../../../../../images/seungok/images/default_icon/heart.png";
import profile from "../../../../../images/seungok/images/default_icon/profile.png";
import "./Nav.scss";

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
          <Link to={"/main-ok"} className="logo-wrap" href="/main">
            <img className="logo-img" src={logo} alt="로고" />
            <h1 className="logo">Westagram</h1>
          </Link>
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
              <img src={explore} alt="탐색" />
            </li>
            <li className="sub-list">
              <img src={heart} alt="좋아요" />
            </li>
            <li className="sub-list profile" onClick={this.toggleSubOption}>
              <img src={profile} alt="프로필" />
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
                <li className="option-list logout">
                  <Link to={"/login-ok"}>로그아웃</Link>
                </li>
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
