import React, { Component } from "react";
import "./MainRight.scss";

export class MainRight extends Component {
  render() {
    return (
      <aside className="mainRight">
        <section className="myId">
          <img
            alt="pika_pika"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/15337133_209335429518588_7310622559332990976_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=tXjThA9A6jQAX9VFQ6u&tp=1&oh=e1ba29a351324b27fd8c6bd28d958f3f&oe=6063FC37"
          />
          <span>pika_pika</span>
        </section>
        <section className="recommends">
          <span className="grey">회원님을 위한 추천</span>
          <div className="recommend recommend1">
            <img
              alt="ch.keeps"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/117648414_727855131400183_4085965008266904814_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=L_dpIG-MxAAAX_Tu_Jz&tp=1&oh=67f632ff2d9b1945e964d0961c9afd58&oe=60641FA9"
            />
            <div className="recommendText">
              <span>ch.keeps</span>
              <span className="grey">회원님을 팔로우합니다.</span>
            </div>
            <span className="follow">팔로우</span>
          </div>
          <div className="recommend recommend2">
            <img
              alt="sukicat"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68763591_384685372220491_3522731321480708096_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=BvdQ1M1vNtkAX9-4Od-&oh=a0d1ca5960a4b2595c4362fde7db0e70&oe=60665414"
            />
            <div className="recommendText">
              <span>sukicat</span>
              <span className="grey">danajjung님이 팔로우합니다</span>
            </div>
            <span className="follow">팔로우</span>
          </div>
          <div className="recommend recommend3">
            <img
              alt="itsselynn"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119188310_325746038538319_302232268190399447_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0pZGvKEQO4sAX-_EOCD&oh=eff1dda0b9a5bcbd290980b3fe7d677a&oe=6066EF23"
            />
            <div className="recommendText">
              <span>itsselynn</span>
              <span className="grey">Instagram 신규 가입</span>
            </div>
            <span className="follow">팔로우</span>
          </div>
        </section>
        <section className="copyright">
          <span>
            소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 ·
            약관 · 위치 · 인기 계정 · 해시태그 · 언어
            <br />
            <br />© 2021 INSTAGRAM FROM FACEBOOK
          </span>
        </section>
      </aside>
    );
  }
}

export default MainRight;
