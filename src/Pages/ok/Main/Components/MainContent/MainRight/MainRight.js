import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import RecommendList from "./RecommendList";
import { UrlPath } from "../../../../UrlPath";
import "./MainRight.scss";

class MainRight extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    user: "",
    recommendList: [],
  };

  LogoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
    });
    // 데이터 요청시 사용
    fetch(`${UrlPath}/account/recommended`, {
      method: "GET",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          recommendList: res,
        });
      });
  }
  render() {
    const { user } = this.state;
    return (
      <aside className="main-right">
        <div className="right-user">
          <img
            src="https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fdel27-1.fna.fbcdn.net&_nc_ohc=-U1ua_8bi5cAX_wBAmO&oh=1f6ecc70644553594974d2ac7c3ddfc2&oe=606BC40F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
            alt="프로필"
          />
          <div className="user-info">
            <Link>{user}</Link>
            <span>테스트 계정</span>
          </div>
          <Link to="/login-ok" onClick={this.LogoutUser}>
            전환
          </Link>
        </div>
        <div className="right-recommend">
          <div className="recommend-title">
            <span>회원님을 위한 추천</span>
            <Link>모두 보기</Link>
          </div>
          {this.state.recommendList.map((recommend, index) => {
            return <RecommendList key={index} data={recommend} />;
          })}
        </div>
        <Footer />
      </aside>
    );
  }
}

export default MainRight;
