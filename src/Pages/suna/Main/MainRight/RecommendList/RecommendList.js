import React from 'react';
import './RecommendList.scss';

class RecommendList extends React.Component {
  render() {
    const { name, profileImg, statusInfo, status } = this.props;
    return (
            <div className="recommend-list">
              <div className="recommend-users">
                <div className="card">
                  <img
                    alt={name}
                    src={profileImg}
                    className="card-img"
                  />              
                  <div className="card-content">
                    <h3>{name}</h3>
                    <p className="gray">{statusInfo}</p>
                  </div>
                </div>
               { status ? <p className="blue">팔로잉</p> : <p className="bold">팔로우</p> }
              </div>
            </div>
    );
  }
}
export default RecommendList;