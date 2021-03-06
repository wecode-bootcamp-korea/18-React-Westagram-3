import React from 'react';
import './MainRight.scss';
import Footer from './Footer/Footer';
import './Footer/Footer.scss';

class MainRight extends React.Component {
  render() {
    return (
        <aside className="main-right">
          <div className="profile-box">
            <div className="card">
              <img
                src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
                alt="profile"
                className="profile-img"
              />
              <div className="card-content">
                <h3>wecode-bootcamp</h3>
                <p className="gray">WeCode-위코드</p>
              </div>
            </div>
            <p className="blue">전환</p>
          </div>
          <div className="user-recommend">
            <div className="recommend-title">
              <h3>회원님을 위한 추천</h3>
              <p className="bold">모두 보기</p>
            </div>
            <div className="recommend-list">
              <div className="recommend-users">
                <div className="card">
                  <img
                    src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
                    alt="profile image1"
                    className="card-img"
                  />              
                  <div className="card-content">
                    <h3>1username1</h3>
                    <p className="gray">username123님 외 100명이 팔로우합니다</p>
                  </div>
                </div>
                <p className="blue">팔로우</p>
              </div>
              <div className="recommend-users">
                <div className="card">
                  <img
                    src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
                    alt="profile image1"
                    className="card-img"
                  />
                  <div className="card-content">
                    <h3>1username1</h3>
                    <p className="gray">username1님 외 10명이 팔로우합니다</p>
                  </div>
                </div>
                <p className="blue">팔로우</p>
              </div>
              <div className="recommend-users">
                <div className="card">
                  <img
                    src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
                    alt="profile image1"
                    className="card-img"
                  />
                  <div className="card-content">
                    <h3>2username2</h3>
                    <p className="gray">username2님 외 10명이 팔로우합니다</p>
                  </div>
                </div>
                <p className="blue">팔로우</p>
              </div>
              <div className="recommend-users">
                <div className="card">
                  <img
                    src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
                    alt="profile image1"
                    className="card-img"
                  />
                  <div className="card-content">
                    <h3>3username3</h3>
                    <p className="gray">username4님 외 10명이 팔로우합니다</p>
                  </div>
                </div>
                <p className="bold">팔로잉</p>
              </div>
              <div className="recommend-users">
                <div className="card">
                  <img
                  src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
                  alt="profile" className="card-img" />
                  <div className="card-content">
                    <h3>5username5</h3>
                    <p className="gray">username5님 외 34명이 팔로우합니다</p>
                  </div>
                </div>
                <p className="blue">팔로우</p>
              </div>
            </div>
          </div>
          
          <Footer />
        </aside>
    );
  }
}

export default MainRight;
