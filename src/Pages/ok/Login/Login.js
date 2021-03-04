import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

class LoginOk extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: "",
    password: "",
    checkValidation: false,
  };
  InputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  LoginClick = e => {
    return !this.state.checkValidation ? e.preventDefault() : true;
  };
  LoginKeyUp = e => {
    if (this.state.email.includes("@") && this.state.password.length >= 5) {
      this.setState({
        checkValidation: true,
      });
    } else
      this.setState({
        checkValidation: false,
      });
    return e.keyCode === 13 && this.state.checkValidation
      ? this.props.history.push("/main")
      : false;
  };
  render() {
    return (
      <section className="login">
        <div className="login-box">
          <div className="login-form">
            <h1 className="logo">Westagram</h1>
            <input
              id="username"
              name="email"
              className="login-input"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={this.state.email}
              onChange={this.InputChange}
            />
            <input
              id="password"
              name="password"
              className="login-input"
              type="password"
              placeholder="비밀번호"
              value={this.state.password}
              onChange={this.InputChange}
              onKeyUp={this.LoginKeyUp}
            />
            <Link
              onClick={this.LoginClick}
              to="main"
              className={
                "login-button " + (this.state.checkValidation ? "active" : "")
              }
            >
              로그인
            </Link>
            <a href="#" className="login-help">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default LoginOk;
