import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      idValid: false,
      pwValid: false,
    };
  }

  handleValidId = (e) => {
    const isValidLen =
      e.target.value.length > 4 && e.target.value.indexOf("@") > -1;
    if (isValidLen) this.setState({ idValid: true, id: e.target.value });
    else this.setState({ idValid: false });
  };

  handleValidPw = (e) => {
    const isValidLen = e.target.value.length > 4;
    if (isValidLen) this.setState({ pwValid: true, pw: e.target.value });
    else this.setState({ pwValid: false });
  };

  handleJoinSubmit = () => {
    fetch("http://10.58.1.171:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("결과 :", result);
        return result.status === 200
          ? alert("회원가입 성공하였습니다. ")
          : alert(result.message);
      });
  };

  handleLoginSubmit = () => {
    fetch("http://10.58.1.171:8000/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("결과 :", result);
        return result.status === 200
          ? this.props.history.push("/main-song")
          : alert(result.message);
      });
  };

  render() {
    return (
      <div className="Login">
        <div className="main-box">
          <header className="logo big-logo">westagram</header>
          <div className="inner-box">
            <input
              onChange={this.handleValidId}
              type="text"
              name=""
              id="loginId"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handleValidPw}
              type="password"
              name=""
              id="passWord"
              placeholder="비밀번호"
            />
            <button
              disabled={!(this.state.idValid && this.state.pwValid)}
              className="btnLogin"
              onClick={this.handleJoinSubmit}
            >
              회원가입
            </button>
            <button
              disabled={!(this.state.idValid && this.state.pwValid)}
              className="btnLogin"
              onClick={this.handleLoginSubmit}
            >
              로그인
            </button>
            <div className="line">
              <div className="line-through"></div>
              <div>또는</div>
              <div className="line-through"></div>
            </div>
          </div>
          <a className="forget-pwd" href="./">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}
export default Login;
