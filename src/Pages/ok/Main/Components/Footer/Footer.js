import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className="footer-nav">
          <li className="footer-list">
            <a>소개</a>
          </li>
          <li className="footer-list">
            <a>도움말</a>
          </li>
          <li className="footer-list">
            <a>홍보 센터</a>
          </li>
          <li className="footer-list">
            <a>API</a>
          </li>
          <li className="footer-list">
            <a>채용 정보</a>
          </li>
          <li className="footer-list">
            <a>개인정보처리방침</a>
          </li>
          <li className="footer-list">
            <a>약관</a>
          </li>
          <li className="footer-list">
            <a>위치</a>
          </li>
          <li className="footer-list">
            <a>인기 계정</a>
          </li>
          <li className="footer-list">
            <a>해시태그</a>
          </li>
          <li className="footer-list">
            <a>언어</a>
          </li>
        </ul>
        <p>© 2021 WESTAGRAM FROM SEUNGOK</p>
      </footer>
    );
  }
}

export default Footer;
