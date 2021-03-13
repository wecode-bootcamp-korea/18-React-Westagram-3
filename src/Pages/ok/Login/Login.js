import React from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { UrlPath } from "../UrlPath"; // 데이터 요청시 사용
import "./Login.scss";

class LoginOk extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    checkNewUser: false,
    randomColor: null,
  };

  signUpUserInfo = async (username, email, phoneNumber, password) => {
    const { checkNewUser } = this.state;
    // 데이터 요청시 사용
    await fetch(`${UrlPath}/account/sign-up`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        phone_number: phoneNumber,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === "SUCCESS") {
          alert("회원가입 성공!!");
          this.setState({
            checkNewUser: checkNewUser,
          });
        } else {
          alert("회원가입 실패!!");
          return false;
        }
      });
  };

  checkUserInfo = async (email, password) => {
    // 데이터 요청시 사용
    await fetch(`${UrlPath}/account/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (res.message === "SUCCESS") {
          alert("로그인 성공!!");
          localStorage.setItem("token", JSON.stringify(res.token));
          localStorage.setItem("user", JSON.stringify(res.username));
          return this.props.history.push("/main-ok");
        } else {
          alert("로그인 실패!!");
          return false;
        }
      });
  };

  formChange = () => {
    const { checkNewUser } = this.state;
    this.setState({
      checkNewUser: !checkNewUser,
    });
  };

  render() {
    const { checkNewUser } = this.state;
    return (
      <section className="login">
        <div className="login-box">
          {checkNewUser ? (
            <SignUpForm
              signUpUserInfo={this.signUpUserInfo}
              formChange={this.formChange}
            ></SignUpForm>
          ) : (
            <LoginForm
              checkUserInfo={this.checkUserInfo}
              formChange={this.formChange}
            ></LoginForm>
          )}
          <img
            className="appstore"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
            alt="다운로드"
          />
          <img
            className="android"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
            alt="다운로드"
          />
        </div>
      </section>
    );
  }
}
export default LoginOk;
