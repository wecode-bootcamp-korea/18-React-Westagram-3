import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    checkValidation: false,
  };

  InputChange = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        const { email, password } = this.state;
        const isValid = emailReg.test(email) && password.length >= 8;
        this.setState({
          checkValidation: isValid,
        });
      }
    );
  };

  LoginClick = e => {
    const { checkValidation, email, password } = this.state;
    const { checkUserInfo } = this.props;
    return checkValidation
      ? checkUserInfo(email, password)
      : e.preventDefault();
  };

  LoginKeyUp = e => {
    const { checkValidation, email, password } = this.state;
    return e.keyCode === 13 && checkValidation
      ? this.props.checkUserInfo(email, password)
      : false;
  };

  render() {
    const { email, password, checkValidation } = this.state;
    const { formChange } = this.props;
    return (
      <div className="login-form">
        <h1 className="logo">Westagram</h1>
        <div
          className={`login-list ${
            email ? (emailReg.test(email) ? "correct" : "wrong") : ""
          }`}
        >
          <input
            id="username"
            name="email"
            className="login-write"
            type="text"
            value={email}
            onChange={this.InputChange}
            onKeyUp={this.LoginKeyUp}
          />
          <label
            className={`login-placeholder ${email ? "has-value" : ""}`}
            for="username"
          >
            사용자 이름 또는 이메일
          </label>
        </div>
        <div
          className={`login-list ${
            password ? (password.length >= 8 ? "correct" : "wrong") : ""
          }`}
        >
          <input
            id="password"
            name="password"
            className="login-write"
            type="password"
            value={password}
            onChange={this.InputChange}
            onKeyUp={this.LoginKeyUp}
          />
          <label
            className={`login-placeholder ${password ? "has-value" : ""}`}
            for="password"
          >
            비밀번호
          </label>
        </div>
        <Link
          className={`btn-normal login ${checkValidation ? "active" : ""}`}
          onClick={this.LoginClick}
        >
          로그인
        </Link>
        <Link className="to-signup">
          계정이 없으신가요? <span onClick={formChange}>가입하기</span>
        </Link>
      </div>
    );
  }
}

export default LoginForm;
const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
