import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCog } from "@fortawesome/free-solid-svg-icons";
import {
  faUserCircle,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import AddFeedForm from "./Components/AddFeedForm";
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
    uploadPop: false,
    optionToggle: false,
  };

  searchChange = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
        inputTime: new Date(),
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

  handleUpload = () => {
    this.setState({
      uploadPop: !this.state.uploadPop,
    });
  };

  toggleSubOption = e => {
    this.setState({
      optionToggle: !this.state.optionToggle,
    });
  };

  render() {
    const { getFeedData } = this.props;
    const { search, searchList, optionToggle, uploadPop } = this.state;
    const OptionList = [
      { icon: faUserCircle, title: "프로필" },
      { icon: faBookmark, title: "저장됨" },
      { icon: faCog, title: "설정" },
    ];
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
              value={search}
              onChange={this.searchChange}
            />
            <ul className={`search-view ${searchList.length ? "active" : ""}`}>
              {searchList.map(searchData => {
                return (
                  <li className="search-list">
                    <div
                      className={`search-img-box ${
                        searchData.storyActive ? "story-active" : ""
                      }`}
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
              <FontAwesomeIcon
                icon={faPlusSquare}
                onClick={this.handleUpload}
              />
            </li>
            <li className="sub-list">
              <img src={explore} alt="탐색" />
            </li>
            <li className="sub-list">
              <img src={heart} alt="좋아요" />
            </li>
            <li className="sub-list profile" onClick={this.toggleSubOption}>
              <img src={profile} alt="프로필" />
            </li>
            <div className={`sub-option ${optionToggle ? "active" : ""}`}>
              <ul className="option-wrap">
                {OptionList.map((option, index) => {
                  return (
                    <li key={index} className="option-list">
                      <FontAwesomeIcon icon={option.icon} />
                      <span>{option.title}</span>
                    </li>
                  );
                })}
                <li className="option-list logout">
                  <Link to={"/login-ok"}>로그아웃</Link>
                </li>
              </ul>
              <span className="triangle-content"></span>
            </div>
          </ul>
        </div>
        {uploadPop && (
          <AddFeedForm
            getFeedData={getFeedData}
            handleUpload={this.handleUpload}
            uploadPop={uploadPop}
          />
        )}
      </nav>
    );
  }
}

export default Nav;
