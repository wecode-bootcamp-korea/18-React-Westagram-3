import React, { Component } from "react";

import imgProfile from "../../../../../src/images/songhee/myprofile.jpg";
import "./Aside.scss";
class Aside extends Component {
  render() {
    return (
      <div className="Aside">
        <div className="user-component">
          <div className="user-component__column">
            <img className="user-component__pimg" src={imgProfile} alt="" />
            <div className="user-component__text">
              <a href="#" className="user-component__id">
                soon.cake
              </a>
              <span className="user-component__subinfo">
                여주 떡케이크 순한설기
              </span>
            </div>
          </div>

          <button className="user-component__column btn-none">전환</button>
        </div>
        <div className="user-recommend">
          <span>회원님을 위한 추천</span>
          <a href="#">
            <span>모두보기</span>
          </a>
        </div>
        <div className="user-component-list">
          <div className="user-component">
            <div className="user-component__column">
              <img
                className="user-component__pimg sm"
                src={imgProfile}
                alt=""
              />
              <div className="user-component__text">
                <a href="" className="user-component__id">
                  soon.cake
                </a>
                <span className="user-component__subinfo">
                  회원님을 팔로우합니다
                </span>
              </div>
            </div>
            <button className="user-component__column btn-none">팔로우</button>
          </div>
          <div className="user-component">
            <div className="user-component__column">
              <img
                className="user-component__pimg sm"
                src={imgProfile}
                alt=""
              />
              <div className="user-component__text">
                <a href="" className="user-component__id">
                  soon.cake
                </a>
                <span className="user-component__subinfo">
                  clematis_fleur님 외 1명이 팔로우합니다
                </span>
              </div>
            </div>
            <button className="user-component__column btn-none">팔로우</button>
          </div>
        </div>
        <div className="site-info">
          <div>
            <ul>
              <li>
                <a href="https://about.instagram.com/" target="_blank">
                  소개
                </a>
              </li>
              <li>
                <a href="#">도움말</a>
              </li>
              <li>
                <a href="#">홍보 센터</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">채용 정보</a>
              </li>
              <li>
                <a href="#">개인정보처리방침</a>
              </li>
              <li>
                <a href="#">약관</a>
              </li>
              <li>
                <a href="#">위치</a>
              </li>
              <li>
                <a href="#">해시태그</a>
              </li>
              <li>
                <a href="#">언어</a>
              </li>
            </ul>
          </div>
          <div>© 2021 INSTAGRAM FROM FACEBOOK</div>
        </div>
      </div>
    );
  }
}
export default Aside;
