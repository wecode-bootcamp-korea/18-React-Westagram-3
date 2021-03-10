import React, { Component } from "react";
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
    const { value } = e.target.value;
    const isValidLen = value.length > 4 && value.indexOf("@") > -1;
    isValidLen
      ? this.setState({ idValid: true, id: value })
      : this.setState({ idValid: false });
  };

  handleValidPw = (e) => {
    const { value } = e.target.value;
    const isValidLen = value.length > 4;
    isValidLen
      ? this.setState({ pwValid: true, pw: value })
      : this.setState({ pwValid: false });
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
    const { id, pw } = this.state;
    fetch("http://10.58.1.171:8000/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        return result.status === 200
          ? this.props.history.push("/main-song")
          : alert(result.message);
      });
  };

  render() {
    const { idValid, pwValid } = this.state;
    return (
      <div className="login">
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
              disabled={!(idValid && pwValid)}
              className="btnLogin"
              onClick={this.handleJoinSubmit}
            >
              회원가입
            </button>
            <button
              disabled={!(idValid && pwValid)}
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
