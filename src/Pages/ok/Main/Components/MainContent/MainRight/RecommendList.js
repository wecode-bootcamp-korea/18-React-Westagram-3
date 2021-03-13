import React, { Component } from "react";
import { UrlPath } from "../../../../UrlPath";
import { Link } from "react-router-dom";

class RecommendList extends Component {
  state = {
    followCheck: false,
  };

  handleFollow = () => {
    const { data } = this.props;
    const { followCheck } = this.state;
    this.setState(
      {
        followCheck: !this.state.followCheck,
      },
      async () => {
        // 데이터 요청시 사용
        await fetch(`${UrlPath}/account/follow`, {
          method: "POST",
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
          body: JSON.stringify({
            username: data,
            follow: followCheck ? "follow" : "unfollow",
          }),
        });
      }
    );
  };

  render() {
    const { data } = this.props;
    const { followCheck } = this.state;

    return (
      <div className="recommend-list">
        <img
          src="https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fdel27-1.fna.fbcdn.net&_nc_ohc=-U1ua_8bi5cAX_wBAmO&oh=1f6ecc70644553594974d2ac7c3ddfc2&oe=606BC40F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
          alt="사이드 이미지"
        />
        <div className="list-info">
          <Link>{data}</Link>
          <span>
            {followCheck
              ? "회원님과 친구입니다."
              : "회원님을 팔로우 하고 싶어합니다."}
          </span>
        </div>
        <Link onClick={this.handleFollow}>
          {followCheck ? "팔로우 중" : "팔로우"}
        </Link>
      </div>
    );
  }
}

export default RecommendList;
