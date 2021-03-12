import React from 'react';
import Footer from './Footer/Footer';
import RecommendList from './RecommendList/RecommendList';
import './MainRight.scss';

class MainRight extends React.Component {
  constructor() {
    super();
    this.state = {
      recommendList: [],
    };
  }

  componentDidMount() {
    fetch('/data/recommendData.json', )
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommendList: data,     
        });
      });
  }

  render() {
    const { recommendList } = this.state;
    return (
        <aside className="main-right">
          <div className="profile-box">
            <div className="card">
              <img
                alt="profile"
                src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg"
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
            {recommendList.map(user => {
              return (
                <RecommendList 
                key={user.id}
                name={user.userName}
                profileImg={user.profileSrc}
                statusInfo={user.Info}
                status={user.isFollow} />
             );
            })}
          </div>
          <Footer />
        </aside>
    );
  }
}

export default MainRight;
