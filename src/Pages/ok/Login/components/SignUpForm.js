import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import "./SignUpForm.scss";

class SignUpForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    checkValidation: false,
  };

  InputChange = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        const { username, email, phoneNumber, password } = this.state;
        this.setState({
          checkValidation:
            username.length >= 5 &&
            emailReg.test(email) &&
            phoneNumberReg.test(phoneNumber) &&
            password.length >= 8,
        });
      }
    );
  };

  SignUpClick = e => {
    const {
      username,
      email,
      phoneNumber,
      password,
      checkValidation,
    } = this.state;
    const { signUpUserInfo } = this.props;
    return checkValidation
      ? signUpUserInfo(username, email, phoneNumber, password)
      : e.preventDefault();
  };

  render() {
    const {
      username,
      email,
      phoneNumber,
      password,
      checkValidation,
    } = this.state;
    const { formChange } = this.props;
    return (
      <div className="sign-up-form">
        <h1 className="logo">Sign Up</h1>
        <div
          className={`sign-up-list ${
            username ? (username.length >= 5 ? "correct" : "wrong") : ""
          }`}
        >
          <input
            id="username"
            name="username"
            className="form-write"
            type="text"
            value={username}
            onChange={this.InputChange}
          />
          <label
            className={`form-title ${username !== "" ? "has-value" : ""}`}
            for="username"
          >
            아이디
          </label>
        </div>
        <div
          className={`sign-up-list ${
            email ? (emailReg.test(email) ? "correct" : "wrong") : ""
          }`}
        >
          <input
            id="email"
            name="email"
            className="form-write"
            type="email"
            value={email}
            onChange={this.InputChange}
          />
          <label
            className={`form-title ${email !== "" ? "has-value" : ""}`}
            for="email"
          >
            이메일
          </label>
        </div>
        <div
          className={`sign-up-list ${
            password ? (password.length >= 8 ? "correct" : "wrong") : ""
          }`}
        >
          <input
            id="password"
            name="password"
            className="form-write"
            type="password"
            value={password}
            onChange={this.InputChange}
          />
          <label
            className={`form-title ${password !== "" ? "has-value" : ""}`}
            for="password"
          >
            패스워드
          </label>
        </div>
        <div
          className={`sign-up-list ${
            phoneNumber
              ? phoneNumberReg.test(phoneNumber)
                ? "correct"
                : "wrong"
              : ""
          }`}
        >
          <input
            id="phoneNumber"
            name="phoneNumber"
            className="form-write"
            type="text"
            value={phoneNumber}
            onChange={this.InputChange}
          />
          <label
            className={`form-title ${phoneNumber !== "" ? "has-value" : ""}`}
            for="password"
          >
            핸드폰 번호
          </label>
        </div>

        <button
          className={`btn-normal finish-sign-up ${
            checkValidation ? "active" : ""
          }`}
          onClick={this.SignUpClick}
        >
          회원가입 완료
        </button>
        <FontAwesomeIcon icon={faTimesCircle} onClick={formChange} />
      </div>
    );
  }
}

export default SignUpForm;
const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const phoneNumberReg = /^\d{3}-\d{3,4}-\d{4}$/;
